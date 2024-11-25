import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';


function Contact() {
  return (
    <div className="min-h-screen border-b border-neutral-900  flex flex-col items-center py-10 px-5 sm:px-10">
    
      <h1 className="text-4xl font-thin text-center text-pink-200 mb-8">Contact Us</h1>

      <div className=" border-pink-500 border-2 w-full max-w-md rounded-lg shadow-lg p-8 text-pink-200">
        {/* Address */}
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-pink-500 text-xl mr-3" />
          <p>Bole Dat Tower 1st Floor , Addis Ababa , Ethiopia</p>
        </div>

        
        <div className="flex items-center mb-4">
          <FaPhone className="text-pink-500 text-xl mr-3" />
          <p>0911786389/0928577777</p>
        </div>

        
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-pink-500 text-xl mr-3" />
          <p>Feven@belleza.com</p>
        </div>

       
        <div className="flex items-center mb-4">
          <FaInstagram className="text-pink-500 text-xl mr-3" />
          <p>
            <a href="https://instagram.com/beautyservices" target="_blank" rel="noopener noreferrer">
              @bellezamakeup_1
            </a>
          </p>
        </div>
      </div>

      <div className="flex gap-4 my-5">
      <FaInstagram className="text-pink-500 text-2xl " />
      <FaFacebook className="text-blue-700 bg-white  rounded-full text-2xl " />
      <FaWhatsapp className="text-green-400 text-2xl " />
      <FaTiktok className="text-white text-2xl " />
      
      </div>
    </div>
    
  );
}

export default Contact;
