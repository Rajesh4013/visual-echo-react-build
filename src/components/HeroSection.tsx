
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold text-[#800080] leading-tight">
          The Smarter Way to<br />
          Learn Anything
        </h1>
        <h2 className="text-5xl font-bold text-[#FF6B00] mt-6">
          Experiential Learning
        </h2>
      </div>
      
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        {/* Robot and Child Images */}
        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/51c57eae-b155-4c70-aa0b-dd4072cfe4a3.png" 
              alt="Child with Robot" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden shadow-lg absolute -bottom-10 right-0">
            <img 
              src="/lovable-uploads/51c57eae-b155-4c70-aa0b-dd4072cfe4a3.png" 
              alt="Child Learning on Computer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
