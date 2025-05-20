import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("dakhEduUser");
    if (loggedInUser) {
      setIsAuthenticated(true);
    }
    setIsLoading(false); 
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("dakhEduUser", "loggedIn");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("dakhEduUser");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <LoginPage onLoginSuccess={handleLoginSuccess} />
            } 
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Navbar onLogout={handleLogout} />
                  <main className="flex-grow">
                    <HomePage />
                  </main>
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
           <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;