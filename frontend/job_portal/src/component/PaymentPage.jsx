import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const { planId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name_on_card: "",
    phone: "",
    expiry_date: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPriceByPlan = (plan) => {
    switch (plan) {
      case "basic":
        return "2990";
      case "pro":
        return "5990";
      case "basic-framer":
        return "7990";
      default:
        return "0";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/subs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          plan_name: planId,
          price: getPriceByPlan(planId),
          name_on_card: formData.name_on_card,
          phone: formData.phone,
          expiry_date: formData.expiry_date,
          cvv: formData.cvv,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscription Successful 🎉",
          text: `You are now subscribed to the ${planId} plan.`,
          confirmButtonColor: "#4CAF50",
        }).then(() => {
          navigate("/home");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: data.msg || "Something went wrong. Please try again.",
          confirmButtonColor: "#f44336",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "An error occurred while processing payment.",
        confirmButtonColor: "#ff9800",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          Subscribe to{" "}
          <span style={{ textTransform: "capitalize", color: "#4CAF50" }}>
            {planId}
          </span>{" "}
          Plan
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input style={styles.input} type="text" name="name_on_card" placeholder="Name on Card" value={formData.name_on_card} onChange={handleChange} required />
          <input style={styles.input} type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input style={styles.input} type="text" name="expiry_date" placeholder="Expiry Date (MM/YY)" value={formData.expiry_date} onChange={handleChange} required />
          <input style={styles.input} type="password" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Processing..." : "Pay & Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(135deg, #667eea, #764ba2)", padding: "20px" },
  card: { background: "#fff", borderRadius: "12px", padding: "30px", width: "100%", maxWidth: "400px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", textAlign: "center" },
  title: { fontSize: "22px", marginBottom: "20px", color: "#333" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "12px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "14px", outline: "none", transition: "0.3s" },
  button: { background: "#4CAF50", color: "#fff", padding: "12px", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", transition: "0.3s" },
};

export default PaymentPage;
