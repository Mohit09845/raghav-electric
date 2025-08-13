import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer = () => {
  // Function to handle smooth scrolling for anchor links
  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for navigating from other pages
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favico.png" height={28} width={28} alt="Logo" />
              <span className="text-2xl font-bold text-white">Raghav Electrical</span>
            </div>
            <p className="text-gray-400">Your trusted partner for all electrical needs. Quality service, guaranteed.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" onClick={handleScrollTo('about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
              <li><a href="/#contact" onClick={handleScrollTo('contact')} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><NavLink to="/services" className="hover:text-white transition-colors">Design Engineering</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Cable Engineering</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Panel Engineering</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Winding Services</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123, Tenkasi Rd,<br/>Sankarankovil, TN 627756</li>
              <li className="text-gray-400">contact@raghavelectrical.com</li>
              <li className="text-gray-400">+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Raghav Electrical. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
