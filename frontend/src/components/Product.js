import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../store';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    favourites: { faveItems },
  } = state;

  const addToFavouritesHandler = async (item) => {
    const existItem = faveItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'FAVE_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="contain">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Product;
