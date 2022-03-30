import axios from 'axios';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import { Store } from '../store';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_PRODUCT':
      return { ...state, product: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  let reviewsRef = useRef();
  const [hover, setHover] = useState();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { favourites, userInfo } = state;
  const addToFavouritesHandler = async () => {
    const existItem = favourites.faveItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${product._id}`);
    // if (data.countInStock < quantity) {
    //   window.alert('Sorry. Product is out of stock');
    //   return;
    // }
    ctxDispatch({
      type: 'FAVE_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/favourites');
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error('Please enter comment and rating');
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/products/${product._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: 'CREATE_SUCCESS',
      });
      toast.success('Review submitted successfully');
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      product.rating = data.rating;
      dispatch({ type: 'REFRESH_PRODUCT', payload: product });
      window.scrollTo({
        behavior: 'smooth',
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error('error');
      dispatch({ type: 'CREATE_FAIL' });
    }
  };
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="welcome"></div>

      <Row className="back">
        <Col md={6}>
          <ListGroup variant="flush" className="contain">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <img
                className="img-1"
                src={product.image}
                alt={product.name}
              ></img>
              <h1 className="welcome">{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <div className="d-grid">
                <Button
                  onClick={addToFavouritesHandler}
                  variant="primary"
                  className="button1"
                >
                  Add to favourites
                </Button>
              </div>
            </ListGroup.Item>
            <ListGroupItem>
              <b> Definition:</b>
              <p>{product.description}</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={6}>
          <ListGroup variant="flush" className="contain">
            <ListGroup.Item>
              <Helmet>
                <title>{product.CVEname}</title>
              </Helmet>

              <h1 className="welcome">CVE LIST</h1>
              <b>
                <div>
                  <button
                    className="button2"
                    onMouseOver={handleMouseIn}
                    onMouseOut={handleMouseOut}
                  >
                    {hover
                      ? 'The Common Vulnerabilities and Exposures is a list of publicly disclosed cybersecurity vulnerabilities that is free to search, use, and incorporate into products and services, per the terms of use...'
                      : 'what is CVE?'}
                  </button>
                </div>
                <i className="subtitle"></i>
              </b>
            </ListGroup.Item>
            <ListGroupItem>
              <b>Description:</b>
              <p>{product.CVEdescription}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b> Status:</b>
              <p>{product.CVEstatus}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b> References:</b>
              <p>{product.CVEreferences}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b> Phase:</b>
              <p>{product.CVEphase}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b> Votes:</b>
              <p>{product.CVEvotes}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b> Comments:</b>
              <p>{product.CVEcomments}</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      <div className="my-3 ">
        <h2 className="welcome" ref={reviewsRef}>
          Reviews
        </h2>
        <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
        <Row>
          <Col>
            {' '}
            <ListGroup>
              {product.reviews.map((review) => (
                <ListGroup.Item key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <div className="my-3">
              {userInfo ? (
                <form onSubmit={submitHandler}>
                  <h2>Tell us what you think?</h2>
                  <Form.Group className="mb-3" controlId="rating">
                    <Form.Label></Form.Label>
                    <Form.Select
                      aria-label="Rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Select rating...</option>
                      <option value="1">1- Poor</option>
                      <option value="2">2- Fair</option>
                      <option value="3">3- Good</option>
                      <option value="4">4- Very good</option>
                      <option value="5">5- Excelent</option>
                    </Form.Select>
                  </Form.Group>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </FloatingLabel>

                  <div className="mb-3">
                    <Button disabled={loadingCreateReview} type="submit">
                      Submit
                    </Button>
                    {loadingCreateReview && <LoadingBox></LoadingBox>}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please{' '}
                  <Link to={`/signin?redirect=/product/${product.slug}`}>
                    Sign In
                  </Link>{' '}
                  to write a review
                </MessageBox>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ProductScreen;
