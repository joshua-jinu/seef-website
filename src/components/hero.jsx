import React from 'react';
import illustration from '../assets/illustration.jpg';

function Hero() {
  return (
    <div className="w-full h-[100vh] mb-[-1rem] bg-[#e9efec] relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsla(150,16%,93%,0.5)] text-black font-rubik font-extrabold text-left z-10 flex flex-col justify-center">
        <div className="lg:pl-12 pl-6 lg:pt-60 pt-24 sm:pl-8 sm:pt-20">
          <h2 className="text-2xl sm:text-lg leading-snug sm:leading-tight text-shadow-white">
            Sustainable Environment Educational Foundation
          </h2>
          <br />
          <h1 className="lg:text-4xl text-3xl text-shadow-white">Lead.</h1>
          <br />
          <h1 className="lg:text-4xl text-3xl text-shadow-white">Connect.</h1>
          <br />
          <h1 className="lg:text-4xl text-3xl text-shadow-white">Learn.</h1>
        </div>
      </div>
      {/* Background Image */}
      <img
        src={illustration}
        alt="Illustration"
        className="w-full h-full object-cover z-[-1] rounded-b-none"
      />
    </div>
  );
}

export default Hero;
