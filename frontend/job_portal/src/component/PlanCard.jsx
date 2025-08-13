import React from "react";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();

  return (
    <div className="plan-card">
      <h3>{plan.name}</h3>
      <p>₹{plan.price}/month</p>
      <button onClick={() => navigate(`/payment/${plan.name}/${plan.price}`)}>
        Get Started
      </button>
    </div>
  );
};

export default PlanCard;
