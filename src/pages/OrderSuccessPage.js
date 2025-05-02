import React, { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const OrderSuccessPage = () => {
  const { cartDispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    cartDispatch({ type: 'CLEAR_CART' }); // Clear the cart
    navigate('/products'); // Redirect to products
  };

  return (
    <Container className="py-5 text-center">
      <Card className="shadow-sm p-5">
        <h2>🎉 Thank You for Your Purchase!</h2>
        <p className="lead mt-3">Your order has been placed successfully.</p>
        <Button variant="primary" onClick={handleContinueShopping}>
          Continue Shopping
        </Button>
      </Card>
    </Container>
  );
};

export default OrderSuccessPage;