// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import TrendingProducts from '../components/TrendingProducts';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // Show message only once on login (or page refresh)
  useEffect(() => {
    if (isLoggedIn) {
      setShowWelcomeMessage(true);

      const timer = setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 10000); // Hide after 10 seconds

      return () => clearTimeout(timer); // Cleanup
    }
  }, [isLoggedIn]);

  return (
    <div>
      <HeroSlider />

      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to GlowLuxe</h1>

          {isLoggedIn ? (
            <div className="mb-4">
              <p className="lead text-success">You're all set to shop.</p>
            </div>
          ) : (
            <>
              <p className="lead">
                Discover premium skincare and makeup products curated for every beauty lover.
              </p>
            </>
          )}

          <Link to="/products" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* === Trending Products Section === */}
      <TrendingProducts />

      {/* Floating Welcome Back Message */}
      {isLoggedIn && showWelcomeMessage && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#f8f9fa',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: '1000',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#28a745'
        }}>
          Welcome back, {user?.fullName || 'User'}!
        </div>
      )}
    </div>
  );
};

export default HomePage;