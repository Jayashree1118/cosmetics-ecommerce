import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import {useContext } from 'react';
import StarRating from './StarRating';
import { CartContext } from '../context/CartContext';

const ProductModal = ({ show, handleClose, product }) => {
  const { cartDispatch } = useContext(CartContext);
  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.name} added to cart!`);
  };

  if (!product) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body className="p-0 position-relative">
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={handleClose}
          style={{ zIndex: 10 }}
        ></button>

        <div className="d-flex flex-md-row flex-column">
          {/* Image */}
          <div className="col-md-6 p-4 d-flex align-items-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Details */}
          <div className="col-md-6 p-4 bg-light">
            <h2>{product.name}</h2>
            <div className="d-flex align-items-center mt-2 mb-3">
              <StarRating rating={product.rating} />  
              <span className="ms-2 text-muted">({product.rating})</span>
            </div>
            <h4 className="text-success">₹{product.price.toFixed(2)}</h4>
            <p className="mt-3">{product.description || "No description available."}</p>
            <Button variant="success" className="mt-4" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ProductModal;