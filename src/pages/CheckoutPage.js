import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { Container, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const totalPrice = cartState.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // This function will run when the button is clicked
  const handleCheckout = () => {
    console.log('Checkout button clicked'); // Debugging line
    alert('✅ Payment successful! Redirecting to order success page...');
    navigate('/order-success'); // Redirect to order success page
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Checkout</h2>

      {cartState.cartItems.length === 0 ? (
        <p>Your cart is empty. Please add some items before checkout.</p>
      ) : (
        <Card className="shadow-sm p-4">
          <h5>Items in your cart:</h5>
          <ul>
            {cartState.cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — ₹{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <h5>Total: ₹{totalPrice.toFixed(2)}</h5>

          {/* Attach the onClick handler correctly */}
          <Button variant="success" className="mt-3" onClick={handleCheckout}>
            Proceed to Payment
          </Button>
        </Card>
      )}

      <div className="mt-4">
        <Link to="/products" className="btn btn-outline-primary">
          Continue Shopping
        </Link>
      </div>
    </Container>
  );
};

export default CheckoutPage;