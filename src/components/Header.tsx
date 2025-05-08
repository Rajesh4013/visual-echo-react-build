
import React from 'react';
import { Clock, Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Logo type="main" className="h-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-[#009245] text-2xl font-bold">SREE VISMAYEE</span>
              <span className="text-[#009245] text-2xl font-bold">EDUTEK</span>
            </div>
          </div>
          
          {/* Franchise text */}
          <div className="ml-4 flex flex-col items-start">
            <span className="text-xs">A franchise of</span>
            <Logo type="lblock" className="h-10" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <div className="text-[#FF6B00] rounded-full">
              <Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Call / WhatsApp</span>
              <span className="text-sm">+91 63030 20761</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-[#FF6B00] rounded-full">
              <Clock size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Working Hours</span>
              <span className="text-sm">Mon - Sun: 9 AM - 9 PM</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orange Divider Line */}
      <div className="w-full h-px bg-[#FF6B00]"></div>
    </header>
  );
};

export default Header;
