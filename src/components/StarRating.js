import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="d-flex align-items-center">
      {[...Array(totalStars)].map((_, i) => {
        if (i < fullStars) {
          return <FaStar key={i} color="#FFD700" />;
        } else if (hasHalfStar && i === fullStars) {
          return (
            <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
              <FaRegStar color="#ccc" />
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  width: '50%',
                  color: '#FFD700'
                }}
              >
                <FaStar />
              </span>
            </span>
          );
        } else {
          return <FaRegStar key={i} color="#ccc" />;
        }
      })}
    </div>
  );
};

export default StarRating;