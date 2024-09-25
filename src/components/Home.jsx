import React from 'react'
import ChatbotIcon from './ChatbotIcon';
import './Home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <ChatbotIcon />
      </header>
      
      <section style={{marginTop:'5%'}} className="about-us">
        <h2>About Us</h2>
        <p>
          The Ayush sector, comprising Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy, is a traditional Indian system of medicine with a rich history of promoting health and wellness. Our platform is dedicated to supporting startups in this sector, offering resources, guidance, and a network of experts to help new ventures thrive.
        </p>
        <p>
          Whether you are an entrepreneur looking to innovate within the Ayush space or a startup seeking guidance and support, we are here to assist you in navigating the unique challenges and opportunities of this industry.
        </p>
        <h4>For further information:</h4>
        <a href="https://ayush.gov.in/" target="_blank" color="black" rel="noopener noreferrer" className="external-link">
          Visit our official website
        </a>
      </section>
      <Link to={'/reg'}><Button style={{marginTop:'2%',marginLeft:'45%',backgroundColor:'green',color:'white'}}>Register Now !!!</Button></Link>
      <div className="chatbot-container">
        <ChatbotIcon />
      </div>
    
  </div>
  )
}

export default Home