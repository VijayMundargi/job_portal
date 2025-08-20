import React from "react";
import "./Jobs.css";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", type: "Full-Time" },
  { id: 2, title: "Backend Developer", company: "InnovateX", location: "New York, USA", type: "Full-Time" },
  { id: 3, title: "UI/UX Designer", company: "Creative Studio", location: "London, UK", type: "Part-Time" },
  { id: 4, title: "Data Analyst", company: "DataWise", location: "Remote", type: "Contract" },
];

const Jobs = () => {
  return (
    <div className="jobs-container">
      
      <div className="jobs-hero">
        <div className="hero-text">
          <h1>Explore Exciting Job Opportunities</h1>
          <p>Find your perfect job and take your career to the next level.</p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1581091215363-9b6b5a53b3ef?auto=format&fit=crop&w=800&q=80" 
            alt="Jobs"
          />
        </div>
      </div>

      
      <div className="jobs-list">
        {jobsData.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
