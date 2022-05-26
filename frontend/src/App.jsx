import React from "react";
import Landingpage from "./pages/Landingpage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
