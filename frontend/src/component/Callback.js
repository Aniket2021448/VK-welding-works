import React, { useState } from 'react';
import { FcCallback } from 'react-icons/fc';

const CallBackButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCall = () => {
    const phoneNumber = '9868203590'; // Replace with your actual phone number
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Redirect to the "Contact Us" page if call functionality is not available
      window.location.href = '/contact';
    }
  };

  return (
    <div className='fixed bottom-0 right-0 p-3 m-5'>
      <div
        className={`bg-gray-100 text-center cursor-pointer rounded-full p-3 transform transition-all ${
          isHovered ? 'shadow-lg' : 'shadow-md'
        }`}
        style={{border: '2px solid black',zIndex: '9999', visibility: 'visible' }}
        onClick={handleCall}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FcCallback style={{ fontSize: '50px' }} />
      </div>

    </div>
  );
};

export default CallBackButton;
