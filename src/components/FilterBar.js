import React from 'react';

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="form-control w-auto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        className="form-select w-auto"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option>All</option>
        <option>Skincare</option>
        <option>Makeup</option>
      </select>

      {/* Price Range Slider */}
      <div className="w-100 w-md-25">
        <label>Max Price: ₹{priceRange}</label>
        <input
          type="range"
          min="0"
          max="2500"
          step="50"
          className="form-range"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FilterBar;