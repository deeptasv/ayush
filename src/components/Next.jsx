import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './Registration.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const Next = () => {
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
          DOCUMENT UPLOAD
        </h2>
        <header>
            Identity proof of authorized signatory(PAN/Aadar/any valid government proof)
        </header>
<div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{ backgroundColor:"white",color:'black',  position: 'relative', overflow: 'hidden' }}
        >
          Upload file
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </Button>
        </div>
        <header>
            Registration Certificate
        </header>
        <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{backgroundColor:"white",color:'black',  position: 'relative', overflow: 'hidden' }}
        >
          Upload file
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </Button>
        </div>
        <header>
            Product License
        </header>
        <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{backgroundColor:"white",color:'black',  position: 'relative', overflow: 'hidden' }}
        >
          Upload file
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </Button>
        </div>
        <header>
            GMP (Good Manufacturing Practices) Certificate
        </header>
        <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{backgroundColor:"white",color:'black',  position: 'relative', overflow: 'hidden' }}
        >
          Upload file
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </Button>
        </div>
        <header>
            Bank Account Details(with proof)
        </header>
        <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{backgroundColor:"white",color:'black', position: 'relative', overflow: 'hidden' }}
        >
          Upload file
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </Button>
        </div>
        <div>
        <Link to={'/complete'}><Button variant="contained" style={{marginLeft:"10%",backgroundColor:"black"}}>
          SUBMIT
        </Button></Link>
        </div>
      </section>
    </Box>
  );
};

export default Next;
