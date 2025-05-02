import React, { useContext } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartModel = ({ show, handleClose }) => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartState.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    handleClose();
    navigate('/order-success');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartState.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartState.cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₹{item.price.toFixed(2)} x {item.quantity}
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() =>
                      cartDispatch({ type: 'INCREASE_QUANTITY', id: item.id })
                    }
                  >
                    +
                  </Button>{' '}
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() =>
                      cartDispatch({ type: 'DECREASE_QUANTITY', id: item.id })
                    }
                  >
                    -
                  </Button>{' '}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() =>
                      cartDispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                    }
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="fw-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        {/* Conditionally render Buy Now button only if cart is not empty */}
        {cartState.cartItems.length > 0 && (
          <Button variant="primary" onClick={handleCheckout}>
            Buy Now
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CartModel;