// CardPlaceholder.jsx
import React from 'react';
import './Placeholder.css'; // Make sure to create this CSS file

const Placeholder = () => {
  return (
    <div className="card-placeholder">
      <div className="placeholder-image"></div>
      <div className="placeholder-title"></div>
      <div className="placeholder-description"></div>
    </div>
  );
};

export default Placeholder;
