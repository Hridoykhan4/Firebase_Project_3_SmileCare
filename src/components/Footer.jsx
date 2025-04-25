import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-primary">TeethMaster Pro</h2>
          <p className="mt-2">
            Your one-stop destination for professional dental bookings. Smile better, live better.
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
            <a href="#"><FaFacebookF className="hover:text-primary" /></a>
            <a href="#"><FaTwitter className="hover:text-primary" /></a>
            <a href="#"><FaInstagram className="hover:text-primary" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">Book Appointment</a></li>
            <li><a className="link link-hover">Services</a></li>
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <p className="flex items-center mt-2">
            <FaPhone className="mr-2 text-primary" /> +880 123 456 789
          </p>
          <p className="flex items-center mt-2">
            <FaEnvelope className="mr-2 text-primary" /> support@teethmasterpro.com
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center border-t pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} TeethMaster Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
