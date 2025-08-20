import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./PaymentPage.css"; // Import the CSS

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name_on_card: "",
    email: "",
    phone: "",
    plan: "basic",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderRes = await fetch("http://localhost:4000/api/payment/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: formData.plan }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message || "Failed to create order");

      const options = {
        key: "rzp_test_AIEfgCrKyUEdo8",
        amount: orderData.order.amount,
        currency: "INR",
        order_id: orderData.order.id,
        name: "My App Name",
        description: `Payment for ${formData.plan} plan`,
        handler: async function (response) {
          const verifyRes = await fetch("http://localhost:4000/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok) {
            Swal.fire({
              icon: "success",
              title: "Payment Successful 🎉",
              text: `You are now subscribed to the ${formData.plan} plan.`,
            });
            navigate("/jobs");
          } else {
            Swal.fire({
              icon: "error",
              title: "Payment Failed",
              text: verifyData.message,
            });
          }
        },
        prefill: {
          name: formData.name_on_card,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#2563eb" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }

    setLoading(false);
  };

  return (
    <div className="payment-page">
      <main className="payment-container">
        <h2>Subscribe to a Plan</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              name="name_on_card"
              value={formData.name_on_card}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Plan</label>
            <select name="plan" value={formData.plan} onChange={handleChange}>
              <option value="basic">Basic - ₹2990</option>
              <option value="premium">Premium - ₹5990</option>
              <option value="pro">Pro - ₹7990</option>
            </select>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default PaymentPage;
