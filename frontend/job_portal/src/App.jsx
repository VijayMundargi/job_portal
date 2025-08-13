// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./component/Register";
import Login from "./component/Login";

import SubscriptionPage from "./component/SubscriptionPage";
import PlanCard from "./component/PlanCard";
import MembershipPlans from "./component/MembershipPlans";
import PaymentPage from "./component/PaymentPage";
import HomePage from "./component/HomePage";


// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path:"/Login",
    element:<Login/>
  },
  
  {
    path:"/subscription",
    element:<SubscriptionPage/>
  },
  {
    path:"/plan",
    element:<PlanCard/>
  },
  {
    path:"/member",
    element:<MembershipPlans/>
  },
 {
  path: "/payment/:planId",
  element: <PaymentPage />
}, 
{
  path:"/home",
  element:<HomePage/>
}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
