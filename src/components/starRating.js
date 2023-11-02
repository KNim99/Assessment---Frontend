// StarRating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'filled' : ''}>
        <FaStar />
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
