
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Instagram } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="container mx-auto px-4 py-2">
      <div className="flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="border-b-2 border-[#FF6B00] text-black px-1 py-2">
            Home
          </Link>
          <Link to="/about" className="text-[#800080] px-1 py-2">
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#800080] px-1 py-2">
              Offerings <ChevronDown size={16} />
            </button>
          </div>
          <Link to="/gallery" className="text-[#800080] px-1 py-2">
            Gallery
          </Link>
          <Link to="/contact" className="text-[#800080] px-1 py-2">
            Contact
          </Link>
          <Link to="/embedded-systems" className="text-[#800080] px-1 py-2">
            Embedded Systems Development
          </Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex gap-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#0066B3] p-2 text-white rounded">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#0066B3] p-2 text-white rounded">
            <Facebook size={20} />
          </a>
        </div>
      </div>
      
      {/* Orange Divider Line */}
      <div className="w-full h-px bg-[#FF6B00] mt-2"></div>
    </nav>
  );
};

export default Navigation;
