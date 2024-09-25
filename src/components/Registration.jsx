
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Registration.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    
    <Box 
      component="form"
      className="registration-container"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
       <section style={{marginLeft:"15%",marginTop:"5%"}} className="about-us">
        <h1 style={{color:'black'}}>
        REGISTER YOUR AYUSH START UP
        </h1>
        <h2>
            PERSONAL INFO
        </h2>
      <div>
        <TextField
          required
          id="name"
          label="Name"
        />
      </div>
      <div>
        <TextField
          required
          id="contact-number"
          label="Contact Number"
        />
      </div>
      <div>
        <TextField
          required
          id="organization-name"
          label="Organization Name"
        />
      </div>
      <Link to={'/next'}><Button variant="contained" style={{marginLeft:"10%",backgroundColor:"black"}}>
        NEXT
      </Button>
      </Link>
      </section>
    </Box>
   
  );
};

export default Registration;
