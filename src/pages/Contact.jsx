import React from 'react';

function ContactUs() {
  return (
    <div className="bg-darkgreen mt-20">

      <div className="w-screen h-[300px] bg-lightgreen flex items-center justify-center px-2 z-[500]">
        <span className="lg:text-7xl text-[45px] md:text-6xl font-bold text-white font-palatino">
          Contact Us
        </span>
      </div>

      <div className="flex justify-center mt-8">
        <div className="lg:w-3/4 md:w-[80%] w-[90%] p-6">

          <p className="text-neutral mb-6 text-lg leading-relaxed">
            Join SEEF in making a difference! Partner with us to drive social innovation, address critical challenges, and empower communities. Whether you're an educator, organization, or individual passionate about creating positive change, our mission has a place for you. Join us in creating a sustainable and equitable future.
          </p>
          <p className="text-neutral mb-6 text-lg leading-relaxed">
            <strong>Contact</strong>
            <br />
            (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;