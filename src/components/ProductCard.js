import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductModal from './ProductModal';
import { CartContext } from '../context/CartContext';
import StarRating from './StarRating';
import { useAuth } from '../context/AuthContext';
import ToastNotification from './ToastNotifications';

const ProductCard = ({ product }) => {
  const { cartDispatch } = useContext(CartContext);
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    if (!isLoggedIn) {
      alert('Please log in first to add items to your cart.');
      return;
    }

    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    setShowToast(true);
  };

  return (
    <>
      <div
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
      >
        <Card
          className="h-100 shadow-sm d-flex flex-column"
          onClick={() => setShowModal(true)}
          style={{
            border: 'none',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'background-color 0.3s',
            backgroundColor: '#fff',
          }}
        >
          {/* Image Container with Zoom on Hover */}
          <div
            style={{
              height: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f8f9fa',
              padding: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Card.Img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>

          {/* Card Body */}
          <Card.Body className="d-flex flex-column p-3">
            <Card.Title className="mb-2">{product.name}</Card.Title>

            {/* Rating Stars */}
            <div className="d-flex align-items-center mt-1">
              <StarRating rating={product.rating} />
            </div>

            <p className="text-muted mt-2 mb-3 fs-6">₹{parseFloat(product.price).toFixed(2)}</p>

            <Button
              variant="success"
              className="text-white mt-auto py-2 fw-bold"
              onClick={(e) => {
                e.stopPropagation();
                addToCart();
              }}
              style={{
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e7e34')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Toast Notification */}
      <ToastNotification
        show={showToast}
        onClose={() => setShowToast(false)}
        message={`${product.name} added to cart!`}
      />

      {/* Product Modal */}
      <ProductModal show={showModal} handleClose={() => setShowModal(false)} product={product} />
    </>
  );
};

export default ProductCard;