import React from 'react';
import ExpertCard from './ExpertCard';
import './ExpertList.css';

// Sample data
const experts = [
  { name: 'Dr. John Doe', email: 'john.doe@example.com', phone: '+1234567890', expertise: 'Ayurveda' },
  { name: 'Dr. Jane Smith', email: 'jane.smith@example.com', phone: '+0987654321', expertise: 'Yoga' },
  { name: 'Dr. Alice Johnson', email: 'alice.johnson@example.com', phone: '+1122334455', expertise: 'Homeopathy' },
  {name:"Dr. Ambu Bharat",email: 'ambu.bharat@gmail.com',phone: '885499930',expertise: 'sidhi'},
  {name:"Dr. sudhin suresh",email: 'sudhin.suresh@gmail.com',phone: '878493939',expertise: 'Ayurveda'},
  {name:"Dr. Steve Varkey ",email: 'steve.varkey@gmail.com',phone: '937829927',expertise: 'yoga'},
  {name:"Dr. Joel P Jose",email: 'joel.Pjose@gmail.com',phone: '83517319',expertise: 'unani'},
  {name:"Dr. Riya Mariam Mathews",email: 'riya.mathews@gmail.com',phone: '96386299',expertise: 'sidhi'},
  {name:"Dr. Deepta S V",email: 'deepta.sv@gmail.com',phone: '142372849',expertise: 'Homeopathy'},
  {name:"Dr. Parvathy Salin",email: 'parvathy.salin@gmail.com',phone: '23872398239',expertise: 'Ayurveda'},
  {name:"Dr. Namitha S Menon",email: 'namitha.menon@gmail.com',phone: '2361838',expertise: 'unani'},
  {name:"Dr. Gagan Kurup",email: 'gagan.kurup@gmail.com',phone: '226278111',expertise: 'Sidhi'}
];

const ExpertList = () => {
  return (
    <div className="expert-list-container">
      <h2 className="expert-list-heading" style={{color:'black'}}>Our Experts</h2>
    <div className="expert-list">
      {experts.map((expert, index) => (
        <ExpertCard
          key={index}
          name={expert.name}
          email={expert.email}
          phone={expert.phone}
          expertise={expert.expertise}
        />
      ))}
    </div>
    </div>
  );
};

export default ExpertList;