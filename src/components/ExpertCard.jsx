import React from 'react';
import './ExpertCard.css';

const ExpertCard = ({ name, email, phone, expertise }) => {
  return (
    <div className="expert-card">
      <h2 className="expert-name">{name}</h2>
      <p className="expert-email">Email: {email}</p>
      <p className="expert-phone">Phone: {phone}</p>
      <p className="expert-expertise">Expertise: {expertise}</p>
    </div>
  );
};

export default ExpertCard;