import React from 'react';
import ReactRating from 'react-rating';

const StarFull = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill="#FF9F1C">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
)

const StarEmpty = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill="#FF9F1C">
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
  <path d="M0 0h24v24H0z" fill="none"/></svg>
)

const Rating = ({ rating, onChange }) => {
  const ratingProps = {
    rating: rating,
    initialRating: rating,
    placeholderRate: 10,
    start: 0,
    stop: 10,
    step: 2,
    onChange: value => {handleRatingChange(value)}
  }

  const handleRatingChange = value => {
    if (value > 0) {
      onChange(value)
    }
  }

  return (
    <div className="rating">
      <ReactRating emptySymbol={<StarEmpty />} fullSymbol={<StarFull/>} {...ratingProps} />
    </div>
  )
}

export default Rating;