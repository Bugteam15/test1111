import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
const Footer = () => {
  return <footer className="neo-blur border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold purple-gradient-text">OpenAI Ranking</h3>
            <p className="text-sm text-rewards-textMedium">Welcome to your ultimate guide for ranking the best OpenAI-powered websites! We evaluate and spotlight top platforms, helping you discover cutting-edge tools that harness AI innovation. Explore now and find the perfect fit for your needs!

          </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-rewards-purple transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-rewards-purple transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-rewards-purple transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link to="/rewards" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  Rewards
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-rewards-textMedium hover:text-rewards-purple text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="flex items-center text-rewards-textMedium text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@openAiranking.com</span>
            </div>
            
            <div className="mt-4">
              <button className="bg-white/10 hover:bg-white/15 text-white text-sm font-medium py-2 px-4 rounded border border-white/20 transition-colors duration-200">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-rewards-textGray">© 2025 WinRewardsHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0 opacity-70">
            <img src="https://cdn.shopify.com/s/files/1/0494/0761/6067/files/payment-methods.png" alt="Payment methods" className="h-6 filter invert" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;