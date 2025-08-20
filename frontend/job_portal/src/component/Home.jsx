import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/jobs"); 
  };

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-text">
          <h1>Find Your Dream Job</h1>
          <p>Explore thousands of job listings and land your perfect role today.</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
            alt="Job search" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
