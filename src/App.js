import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navigation from "./components/nav";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import OurCleaner from "./pages/ourcleaner";
import HelpPage from "./pages/help";
import PriceListPage from "./pages/PriceList";
import OurServicePage from "./pages/ourservice";
import FormOrder from "./pages/formorder";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ourcleaner" element={<OurCleaner />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/pricelist" element={<PriceListPage />} />
        <Route path="/ourservice" element={<OurServicePage />} />
        <Route path="/formorder" element={<FormOrder />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
