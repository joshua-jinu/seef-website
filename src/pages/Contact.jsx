import React, { useEffect } from 'react';

function ContactUs() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="bg-darkgreen mt-20">

      {/* Header Section */}
      <div className="w-screen h-[300px] bg-lightgreen flex items-center justify-center px-2 z-[500]">
        <span className="lg:text-7xl text-[45px] md:text-6xl font-bold text-white font-palatino">
          Contact Us
        </span>
      </div>

      {/* Content Section */}
      <div className="flex justify-center mt-8">
        <div className="lg:w-3/4 md:w-[80%] w-[90%] p-6">
          <p className="text-neutral mb-6 text-lg leading-relaxed">
            Join SEEF in making a difference! Partner with us to drive social innovation, address critical challenges, and empower communities. Whether you're an educator, organization, or individual passionate about creating positive change, our mission has a place for you. Join us in creating a sustainable and equitable future.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {/* Card 1 */}
            <div className="bg-lightgreen text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Email</h3>
              {/* <p className="text-base">Email us at:</p> */}
              <p className="font-semibold">seeffoundation@gmail.com</p>
            </div>

            {/* Card 2 */}
            <div className="bg-lightgreen text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-base">Liana Wilfrid</p>
              <p className="font-semibold">+91 9110654937</p>
            </div>

            {/* Card 3 */}
            <div className="bg-lightgreen text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-base">Roshini Printer</p>
              <p className="font-semibold">+91 8008519842</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
