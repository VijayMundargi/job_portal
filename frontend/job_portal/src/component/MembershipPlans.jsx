import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic-framer");
  const navigate = useNavigate();

  const plans = [
    {
      id: "basic",
      title: "Basic",
      price: "₹2,990/m",
      desc: "One request at a time. Pause or cancel anytime.",
      features: [
        "One request at a time",
        "Average 48 hour delivery",
        "Unlimited brands",
        "Unlimited users",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
    {
      id: "pro",
      title: "Pro",
      price: "₹5,990/m",
      desc: "Two requests at a time. Pause or cancel anytime.",
      features: [
        "Two requests at a time",
        "Average 48 hour delivery",
        "Unlimited brands",
        "Unlimited users",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
    {
      id: "basic-framer",
      title: "Basic + Framer",
      price: "₹7,990/m",
      desc: "For those in need of design and front-end development.",
      features: [
        "One request at a time",
        "Framer development",
        "Average 72 hour delivery",
        "Support and maintenance",
        "Pause or cancel anytime",
      ],
    },
  ];

  const handleStart = (planId) => {
    navigate(`/payment/${planId}`);
  };

  return (
    <>
      <div className="pricing-container">
        <h1 className="main-title">
          Memberships <br /> Plans
        </h1>
        <p className="subtitle">Choose a plan that's right for you...</p>

        <div className="plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan === plan.id ? "selected" : ""}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3>{plan.title}</h3>
              <h2>{plan.price}</h2>
              <p>{plan.desc}</p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button
                className={selectedPlan === plan.id ? "white" : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStart(plan.id);
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .pricing-container {
          text-align: center;
          padding: 60px 20px;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6); /* Modern blue gradient */
          color: #ffffff;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1rem;
          color: #e0e7ff;
          margin-bottom: 40px;
        }

        .plans {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: auto;
        }

        .plan-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 25px;
          text-align: left;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          color: #1e3a8a;
        }

        .plan-card:hover {
          transform: translateY(-8px);
          border-color: #2563eb;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.15);
        }

        .plan-card.selected {
          border-color: #2563eb;
          background: linear-gradient(145deg, #dbeafe, #ffffff);
        }

        .plan-card h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }

        .plan-card h2 {
          font-size: 2rem;
          color: #1e3a8a;
          margin-bottom: 10px;
        }

        .plan-card p {
          font-size: 0.95rem;
          color: #4b5563;
          margin-bottom: 15px;
        }

        .plan-card ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .plan-card li {
          padding: 6px 0;
          font-size: 0.9rem;
          color: #1e3a8a;
        }

        button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #1e3a8a;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background: #2563eb;
        }

        button.white {
          background: white;
          color: #1e3a8a;
          border: 2px solid #1e3a8a;
        }

        button.white:hover {
          background: #dbeafe;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default MembershipPlans;
