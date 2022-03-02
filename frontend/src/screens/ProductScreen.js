import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { navigate, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import { Store } from '../store';

const reducer = (state, action) => {
  switch (action.type) {
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
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
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
  const { favourites } = state;
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
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={4}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroupItem>
              <b> Definition:</b>
              <p>{product.description}</p>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-grid">
                <Button onClick={addToFavouritesHandler} variant="primary">
                  Add to favourites
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.CVEname}</title>
              </Helmet>
              <h1>CVE LIST</h1>
              <b>
                <i className="subtitle">
                  The Common Vulnerabilities and Exposures is a list of publicly
                  disclosed cybersecurity vulnerabilities that is free to
                  search, use, and incorporate into products and services, per
                  the terms of use...
                </i>
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
    </div>
  );
}
export default ProductScreen;
