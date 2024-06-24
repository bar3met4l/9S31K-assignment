import React from 'react'
import Rating from '@mui/material/Rating';
import { width } from '@mui/system';

function StarRating({rating}) {
  
  return (
    <Rating  name="half-rating-read" defaultValue={rating} precision={0.5} size='small' readOnly />
  );
}

export default StarRating
