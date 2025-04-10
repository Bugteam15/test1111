
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">WinRewardsHub</h3>
            <p className="text-sm text-gray-600">Your destination for the best sweepstakes and rewards online. Enter daily for your chance to win amazing prizes.</p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sweepstakes" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Sweepstakes
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Rewards
                </Link>
              </li>
              <li>
                <Link to="/winners" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Past Winners
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-indigo-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@winrewardshub.com</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="mt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2025 WinRewardsHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <img src="https://cdn.shopify.com/s/files/1/0494/0761/6067/files/payment-methods.png" 
                 alt="Payment methods" 
                 className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
