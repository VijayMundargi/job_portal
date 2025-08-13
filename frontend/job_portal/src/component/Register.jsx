import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/register", {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      });

      toast.success(" Account created successfully!", { position: "top-center" });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed", { position: "top-center" });
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#007BFF"
    }}>
      <ToastContainer />
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              required />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              required />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              required />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              required />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              required />
          </div>

          <button type="submit" style={{
            width: "100%", padding: "10px", backgroundColor: "#007BFF",
            color: "white", border: "none", borderRadius: "5px",
            fontSize: "16px", cursor: "pointer"
          }}>
            Register
          </button>
        </form>

        {/* Added "Already have an account" */}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account? <Link to="/login" style={{ color: "#007BFF", textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
