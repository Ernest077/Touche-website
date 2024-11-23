import React from 'react';
function StarRating({ count }) {
  return (
    <div style={{ fontSize: '12px', color: 'black' }}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}
export default StarRating;