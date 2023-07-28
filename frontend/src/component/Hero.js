import React, { useState, useEffect,useMemo } from 'react';
import { Link } from 'react-router-dom';

import heroBG2 from '../assets/heroBG2.jpg';
import heroBG3 from '../assets/heroBG3.jpg';
import heroBG4 from '../assets/heroBG4.jpg';
import heroBG5 from '../assets/heroBG5.jpg';

const Hero = () => {
    
  
  // Wrap the initialization of 'images' in useMemo hook
  const images = useMemo(() => [
    heroBG2,
    heroBG3,
    heroBG4,
    heroBG5
    // Add more images here
  ], []);
  // const images = [heroBG2, heroBG3, heroBG4, heroBG5];
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Function to change the background image every 5 seconds
    const changeImage = () => {
      if (!isHovered) {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }
    };

    const interval = setInterval(changeImage, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  useEffect(() => {
    // Preload images
    Promise.all(images.map((src) => loadImage(src))).then(() => {
      setLoading(false);
    });
  }, [images]);

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  };

  const handleSliderHover = () => {
    setIsHovered(true);
  };

  const handleSliderLeave = () => {
    setIsHovered(false);
  };


  return (
    <div style={{justifyContent: 'center', boxShadow: '0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20)' }}>
      <header style={{ height: '38rem' }}>
      {/* <Heroslider /> */}
      <div
          className="hero-slider"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            position: 'relative',
            borderRadius: '5px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-image 0.8s ease-in-out', // Add the CSS transition
          }}
          onMouseEnter={handleSliderHover}
          onMouseLeave={handleSliderLeave}
        >
          {loading && <div>Loading...</div>}




          <div className="relative z-10 text-center"> {/* Add z-10 class to control the text's z-index */}
            <div className='mx-10 sm:mx-20 md:mx-40 lg:mx-80'>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 font-semibold text-gray-800 dark:text-white">
                Build Your New <span className="text-orange-600 dark:text-orange-600">IDEA</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white font-medium dark:text-grey-400 px-4 sm:px-8 md:px-10 lg:px-10 xl:px-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit
                harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              </p>
            </div>
            <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row justify-center"> {/* Use justify-center to center the buttons */}
              <div className='mx-5'>
                <Link
                  to={"Contact"}
                  className="block px-4 py-3 my-4 text-sm sm:text-m md:text-lg font-medium tracking-wider text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-700"
                >
                  Contact us
                </Link>
              </div>
              <div className='mx-5'>
                <Link
                  to={"Products"}
                  className="block px-5 py-3 my-4 text-sm sm:text-m md:text-lg font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md sm:mx-4 hover:bg-gray-300"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>

          {/* Gradient Effect */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))',
              zIndex: 2,
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
