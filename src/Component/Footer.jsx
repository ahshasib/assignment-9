import React from 'react';
import { Link } from 'react-router'; 
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-800 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-yellow-300 pb-6">

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/auth/profile" className="hover:underline">My Profile</Link></li>
            <li><Link to="/auth/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
            <FaTwitter size={26}/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube">
            <IoLogoYoutube size={26}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
            <FaFacebook size={26}/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 text-sm text-gray-600">
        © {new Date().getFullYear()} All rights reserved | Developed by <span className="font-semibold">HASIBUL ISLAM</span>
      </div>
    </footer>
  );
};

export default Footer;
