import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "We are looking for a skilled React developer to join our UI team and build engaging user experiences.",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Join our backend team to develop robust APIs and scalable server-side applications using Node.js.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    description:
      "Looking for a DevOps engineer to automate deployments, manage cloud infrastructure, and ensure system reliability.",
  },
];

const HomePage = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}> Latest Job Openings</h1>
      <div style={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <div>
              <h2 style={styles.jobTitle}>{job.title}</h2>
              <p style={styles.jobDescription}>{job.description}</p>
            </div>
            <button style={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "60px 20px",
    background: "#f4f7fb",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#1e293b",
  },
  jobList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    cursor: "pointer",
    animation: "fadeIn 0.4s ease-in-out",
  },
  jobTitle: {
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#0f172a",
  },
  jobDescription: {
    fontSize: "1rem",
    color: "#475569",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  applyButton: {
    padding: "12px 18px",
    background: "linear-gradient(90deg, #2563eb, #16a34a)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

// Add hover effects via JS
styles.card[":hover"] = {
  transform: "translateY(-5px)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
};
styles.applyButton[":hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

export default HomePage;
