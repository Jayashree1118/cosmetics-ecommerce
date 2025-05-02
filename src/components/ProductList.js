// src/components/ProductList.jsx

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Radiant Serum",
    price: 999,
    image: "https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/media-center-items/8/1/7/4e482975833646389daecab769fab7b8-screen.jpg",
    category: "Skincare",
    rating: 899,
    description: "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C for glowing, radiant skin."
  },
  {
    id: 2,
    name: "Matte Lipstick",
    price: 499,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQglCY8K9CgYEurOit2Fumm6lgWrE7r94vMAd-I2G3xeHR7KDLsW_Z-8PqGu9VEI27uCNI2gGYQxSL5SmNmi7AgLbcpbUZH1CLIc75bGFV4WVkVFGHc78tOoA",
    category: "Makeup",
    rating: 2169,
    description: "Velvety matte finish lipstick that glides on smoothly and lasts all day without drying your lips."
  },
  {
    id: 3,
    name: "Hydrating Cream",
    price: 299,
    image: "https://greenpharmacy.co.in/cdn/shop/files/Hydrating_Cream.jpg?v=1729316285&width=1946",
    category: "Skincare",
    rating: 260,
    description: "Deeply moisturizing cream enriched with shea butter and ceramides to lock in hydration and restore softness."
  },
  {
    id: 4,
    name: "Mineral Foundation",
    price: 599,
    image: "https://m.media-amazon.com/images/I/51wwsCnXEuL.jpg",
    category: "Makeup",
    rating: 4.6,
    description: "Natural mineral-based foundation offering buildable coverage while soothing sensitive skin."
  },
  {
    id: 5,
    name: "Glowing Toner",
    price: 1169,
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1137525/WCXxum-Jk-1137525_1.jpg",
    category: "Skincare",
    rating: 4.2,
    description: "Balancing toner with rosewater and chamomile to refresh and prep your skin before moisturizer."
  },
  {
    id: 6,
    name: "Eyeshadow Palette",
    price: 899,
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/961200/bj_IgJ7aDD-961200_1.jpg",
    category: "Makeup",
    rating: 926,
    description: "12-shade eyeshadow palette with matte and shimmer finishes perfect for any occasion."
  },
  {
    id: 7,
    name: "Anti-Aging Cream",
    price: 700,
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/plum/915853/0/rPzT0TEtVe-FowadA0-6S-915853_1.jpg",
    category: "Skincare",
    rating: 4.4,
    description: "Advanced anti-aging cream with retinol and peptides to reduce fine lines and improve skin elasticity."
  },
  {
    id: 8,
    name: "Blush Stick",
    price: 1278,
    image: "https://praush.com/cdn/shop/files/1_205869b6-a23a-4659-835e-25a6bc43b019.jpg?v=1728374513&width=1200",
    category: "Makeup",
    rating: 4.1,
    description: "Creamy blush stick that blends easily for a natural flush of color — ideal for on-the-go touchups."
  },
  {
    id: 9,
    name: "Facial Oil",
    price: 220,
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/939849/J6u7Gk-k8j-939849-1.jpg",
    category: "Skincare",
    rating: 4.8,
    description: "Luxurious facial oil packed with antioxidants and essential oils to deeply nourish and protect your skin."
  },
  {
    id: 10,
    name: "Highlighter",
    price: 900,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnmNHokwjoDX-QL6mYaE-fwZvZSR_q0g6HqVt2Eg1hikcT0EH1RQk8clAU5ThQ9wf86DCohFMQWhWIl8d5QnbVA1Zy9ANnuXGAAmrT32YhDvlTCm25v9Qr",
    category: "Makeup",
    rating: 4.6,
    description: "High-impact highlighter that delivers a radiant glow to cheekbones, brow bones, and collarbones."
  },
  {
    id: 11,
    name: "Face Mask Set",
    price: 2256,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSENkqXMXQ3GiSWl0KUfrh_W_YulqvfJ3qjgVub_URmDdm01eLp1Kh7DD_4zPeOiKin1Ly7rYLVXKLRCdq1scw74Nfu2uyJgW7xWw7m8D_SpRKpyOcwJza9Ww",
    category: "Skincare",
    rating: 4.3,
    description: "Set of 5 hydrating and detoxifying sheet masks designed to brighten and refresh tired skin."
  },
  {
    id: 12,
    name: "Setting Spray",
    price: 1200,
    image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/6/96e9a86ICONI00000034_0.jpg",
    category: "Makeup",
    rating: 4.5,
    description: "Lightweight makeup setting spray that keeps your look flawless from morning meetings to night parties."
  }
];

const ProductList = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [localCategory, setLocalCategory] = useState(selectedCategory || 'All');
  const [priceRange, setPriceRange] = useState(100);

  useEffect(() => {
    if (selectedCategory) {
      setLocalCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = localCategory === 'All' || product.category === localCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={localCategory}
        setSelectedCategory={setLocalCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        categories={['All', 'Skincare', 'Makeup']}
      />

      <Container className="mt-4">
        <Row className="gx-4 gy-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col xs={12} sm={6} md={3} key={product.id}>
                <div className="h-100">
                  <ProductCard product={product} />
                </div>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center">No products found.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;