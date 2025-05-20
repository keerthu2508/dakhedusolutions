import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold mb-4 block">Dakh Edu Solution</span>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative digital solutions for growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/dakh_edu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-xl font-semibold mb-4 block">Services</span>
            <ul className="space-y-2">
              <li>
                <Link to="/#website-design" className="text-gray-400 hover:text-white transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/#social-media" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/#digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/#workshops" className="text-gray-400 hover:text-white transition-colors">
                  Online Workshops
                </Link>
              </li>
              <li>
                <Link to="/#freelancing" className="text-gray-400 hover:text-white transition-colors">
                  Freelancing Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xl font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xl font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a href="mailto:dakhedusolution@gmail.com" className="text-gray-400 hover:text-white transition-colors">dakhedusolution@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 h-5 w-5 text-gray-400" />
                <a href="https://www.instagram.com/dakh_edu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  dakh_edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dakh Edu Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;