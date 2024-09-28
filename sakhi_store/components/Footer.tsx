// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-400">
            Welcome to Sakhi, your number one source for all things related to
            women's clothing. We're dedicated to providing you the best shopping
            experience, with a focus on dependability, customer service, and
            uniqueness.<br/>Regards, <br/> Medha, Rishika, Charmi and Vishva
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram-white-icon.png" // Update with your Instagram icon image path
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebook-app-round-white-icon.png" // Update with your Facebook icon image path
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-white-icon.png" // Update with your WhatsApp icon image path
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>&copy; 2024 Sakhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
