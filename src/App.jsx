import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginPage from "./components/LoginPage";
import Adminlogin from "./components/Adminlogin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </Router>
  );
};

export default App;
