import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Makeup That Speak Volumes",
      subtitle: "Velvet mattes, sheer tints, and everything in between",
      category: "Makeup",
      bg: "https://c0.wallpaperflare.com/preview/218/352/1022/assorted-cosmetic-products.jpg"
    },
    {
      id: 2,
      title: "Skin First, Makeup Second",
      subtitle: "Skincare that preps, protects, and perfects",
      category: "Skincare",
      bg: "https://png.pngtree.com/background/20230425/original/pngtree-products-of-personal-care-picture-image_2475177.jpg"
    }
  ];

  return (
    <Carousel fade indicators={true} controls={true} interval={3000}>
      {slides.map(slide => (
        <Carousel.Item key={slide.id}>
          <div
            className="d-block w-100 position-relative"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '70vh'
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
              <h1 className="display-4 fw-bold">{slide.title}</h1>
              <p className="lead fs-5 mb-4">{slide.subtitle}</p>
              <Link to={`/products?category=${encodeURIComponent(slide.category)}`}>
                <Button variant="light" className="text-dark fw-bold">
                  Shop {slide.category}
                </Button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSlider;