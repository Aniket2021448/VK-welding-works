import React, { useState } from 'react';
import { FcCallback } from 'react-icons/fc';

const CallBackButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCall = () => {
    const phoneNumber = '9868203590';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div
      className={`fixed bottom-10 right-10 cursor-pointer bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-transform duration-500 transform ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 9999, visibility: 'visible', border: '2px solid black' }}
      onClick={handleCall}
    >
      <div className="flex flex-col items-center text-center bg-white rounded-full p-3">
        <FcCallback style={{ fontSize: '50px' }} />
        
        {isHovered && (
          <div className="mt-2 -mb-2 bg-white rounded p-1 text-xs font-semibold">
            Get a Call Back
          </div>
        )}
      </div>
    </div>
  );
};

export default CallBackButton;
