
import React from "react";
import "./About.css"; // We'll add some simple styles

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Company</h1>
        <p>
          We are committed to delivering the best services to our clients with
          integrity, innovation, and excellence.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower businesses and individuals with solutions that make life
          easier, smarter, and more connected.
        </p>
      </section>

      

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Customer Satisfaction</li>
          <li>Collaboration</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
