import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Register from "./component/Register";
import Login from "./component/Login";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer.jsx";
import Home from "./component/Home.jsx";
import SubscriptionPage from "./component/SubscriptionPage";
import PlanCard from "./component/PlanCard";
import MembershipPlans from "./component/MembershipPlans";
import PaymentPage from "./component/PaymentPage";
import Jobs from "./component/Jobs.jsx";
import About from "./component/About.jsx";


const PageWrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <PageWrapper><Register /></PageWrapper> },
  { path: "/login", element: <PageWrapper><Login /></PageWrapper> },
  { path: "/home", element: <PageWrapper><Home /></PageWrapper> },
  { path: "/subscription", element: <PageWrapper><SubscriptionPage /></PageWrapper> },
  { path: "/plan", element: <PageWrapper><PlanCard /></PageWrapper> },
  { path: "/member", element: <PageWrapper><MembershipPlans /></PageWrapper> },
  { path: "/payment/:planId", element: <PageWrapper><PaymentPage /></PageWrapper> },
  { path: "/jobs", element: <PageWrapper><Jobs /></PageWrapper> },
  { path: "/about", element: <PageWrapper><About /></PageWrapper> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
