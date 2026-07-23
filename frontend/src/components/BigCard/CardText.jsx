import React from 'react';
import './BigCard.css';

export default function CardText({ title, description }) {
  return (
    <div className="card-text-section">
      <h2 className="card-title">
        {title}
      </h2>
      <p className="card-description">
        {description}
      </p>
    </div>
  );
}
