import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">
              Dakh Edu Solution
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/#services"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/#about"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <Button variant="outline" onClick={handleLogoutClick} className="ml-2 flex items-center">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#services"
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/#about"
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#contact"
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="outline" onClick={handleLogoutClick} className="w-full flex items-center justify-center">
                 <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;