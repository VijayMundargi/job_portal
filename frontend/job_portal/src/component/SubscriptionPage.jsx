import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlanCard from './PlanCard';

const SubscriptionPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/plans', {
      withCredentials: true 
    })
    .then(res => setPlans(res.data))
    .catch(err => console.error('Failed to fetch plans:', err));
  }, []);

  return (
    <div className="subscription-container">
      <h1 className="heading">Membership plans</h1>
      <p className="subheading">Choose a plan that's right for you...</p>
      <div className="plan-grid">
        {plans.map(plan => (
          <PlanCard key={plan._id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
