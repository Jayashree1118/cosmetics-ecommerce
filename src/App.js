import React from 'react';
import { Routes, Route } from 'react-router-dom';

// === Pages === //
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FaqPage from './pages/FaqPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CheckoutPage from './pages/CheckoutPage'; 
// === Components === //
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderSuccessPage from './pages/OrderSuccessPage';
// === Context Providers === //
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />

        <main className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> 
            <Route path="/order-success" element={<OrderSuccessPage />} />
          </Routes>

        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;