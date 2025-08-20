import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success(" Login successful!", { position: "top-center" });
        setTimeout(() => navigate("/member"), 1500);
      } else {
        toast.error(data.message || "Login failed.", { position: "top-center" });
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong. Please try again.", { position: "top-center" });
    }
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      <div style={styles.box}>
        <h2 style={styles.title}>Log in</h2>
        <p style={styles.subtitle}>Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label} htmlFor="password">Password</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div style={styles.options}>
            <label style={{ fontSize: "14px" }}>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="/" style={styles.link}>Forgot password</a>
          </div>

          <button type="submit" style={styles.button}>Log in</button>
        </form>

        <div style={styles.divider}><span>or</span></div>

        <div style={styles.socialButtons}>
          <button style={{ ...styles.socialBtn, ...styles.google }}>
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
              style={{ marginRight: "8px" }}
            />
            Continue with Google
          </button>

          <button style={{ ...styles.socialBtn, ...styles.linkedin }}>
            <img
              src="https://img.icons8.com/ios-filled/16/0077b5/linkedin.png"
              alt="LinkedIn"
              style={{ marginRight: "8px" }}
            />
            Continue with LinkedIn
          </button>
        </div>

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <a href="/" style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};


const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #007BFF, #00C6FF)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  box: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
    fontSize: "24px",
    fontWeight: "bold"
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    fontWeight: "500",
    marginBottom: "5px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "14px",
    outline: "none"
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px"
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  },
  divider: {
    textAlign: "center",
    margin: "15px 0",
    fontSize: "14px",
    color: "#888"
  },
  socialButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  socialBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    cursor: "pointer",
    background: "white"
  },
  google: {
    borderColor: "#ccc"
  },
  linkedin: {
    borderColor: "#0077b5",
    color: "#0077b5"
  },
  footerText: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px"
  }
};

export default Login;
