// src/pages/ProductsPage.js

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { useLocation } from 'react-router-dom';

const ProductsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    // Update selected category if URL changes
    const newCategory = searchParams.get('category') || 'All';
    setSelectedCategory(newCategory);
  }, [location.search]);

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">
          {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
        </h2>
        <ProductList selectedCategory={selectedCategory} />
      </div>
    
    </div>
  );
};

export default ProductsPage;