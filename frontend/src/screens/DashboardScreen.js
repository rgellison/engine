import { useContext } from 'react';
import { Store } from '../store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../components/Product';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    favourites: { faveItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title>recommendations</title>
      </Helmet>
      <h1>Recommendations based on your likes</h1>
      <div className="products">
        <Row>
          {faveItems.map((item) => (
            <Col key={item.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={item}></Product>
            </Col>
          ))}
        </Row>
        <h1>Recommendations based on popularity</h1>
        <div className="toprated"></div>
        <Row>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}
