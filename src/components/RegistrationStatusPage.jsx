import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You'll need to install axios: npm install axios
import StatusTracker from './StatusTracker';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

// Simulating an API call with mock data (in a real app, use your backend)
const fetchRegistrationStatus = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { status: 'document_verified' } }); // Simulated status
    }, 1000);
  });
};

const RegistrationStatusPage = () => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetchRegistrationStatus(); // Fetching the status
        setCurrentStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching registration status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return <div>Loading status...</div>;
  }

  return (
    <div>
      <h1 style={{marginLeft:'5%',color:'black'}}>Registration Status</h1>
      <StatusTracker currentStatus={currentStatus} />
      <Link to={'/ExpertList'}><Button variant='contained' color='inherit' style={{backgroundcolor:'green',color:'black',marginLeft:'45%',marginTop:'5%'}}>Contact Our Experts</Button></Link>
    </div>
  );
};

export default RegistrationStatusPage;