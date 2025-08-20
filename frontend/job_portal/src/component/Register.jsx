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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }
    try {
      await axios.post("http://localhost:4000/api/auth/register", formData);
      toast.success("Account created successfully!", { position: "top-center" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed", { position: "top-center" });
    }
  };

  return (
    <div
      style={{
        position: "fixed", // overlay in front of everything
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 123, 255, 0.9)", // semi-transparent blue
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // ensure it’s above header and other content
        overflowY: "auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <ToastContainer />
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phoneNumber", "password", "confirmPassword"].map((field, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <label style={{ textTransform: "capitalize" }}>
                {field.replace("Number", " Number")}
              </label>
              <input
                type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#007BFF", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
