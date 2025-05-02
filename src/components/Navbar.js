import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import CartModel from './CartModel';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const { cartState } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        className="navbar-custom mb-4 shadow-sm border-bottom"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-5 text-success">
            GlowLuxe
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center gap-4">
              <Nav.Link
                as={Link}
                to="/"
                className="text-decoration-none text-dark fw-medium fs-6"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className="text-decoration-none text-dark fw-medium fs-6"
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about-us"
                className="text-decoration-none text-dark fw-medium fs-6"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/faq"
                className="text-decoration-none text-dark fw-medium fs-6"
              >
                FAQ
              </Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              {/* Show Cart Only When Logged In */}
              {isLoggedIn && (
                <Button
                  variant="light"
                  onClick={() => setShowCart(true)}
                  className="position-relative d-flex align-items-center justify-content-center rounded-circle p-2 hover-bg-light"
                  style={{ width: '48px', height: '48px' }}
                  title="View Cart"
                >
                  <FaShoppingCart size={22} className="text-success" />
                  {cartState.cartItems.length > 0 && (
                    <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle px-2">
                      {cartState.cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </Button>
              )}

              {/* Authenticated User Dropdown */}
              {isLoggedIn ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant=""
                    className="p-0 border-0 shadow-none text-dark d-flex align-items-center"
                    as="div"
                  >
                    <FaUserCircle size={30} className="me-2" />
                    <span className="d-none d-md-inline text-success fw-medium fs-6">Profile</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="shadow-sm mt-2 dropdown-menu-end">
                    <Dropdown.ItemText className="px-3 pb-2 small text-muted">
                      <strong>{user?.fullName || 'User'}</strong>
                      <br />
                      <small className="text-truncate d-block">{user?.email}</small>
                    </Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>
                      <FaSignOutAlt className="me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="outline-success" as={Link} to="/login" className="rounded-pill px-3 py-2 fs-6">
                  Login
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      {isLoggedIn && <CartModel show={showCart} handleClose={() => setShowCart(false)} />}
    </>
  );
};

export default NavBar;