import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FcCallback } from "react-icons/fc";
// import { useDispatch } from 'react-redux';
// import { logoutRedux } from '../redux/userSlice';
// import { toast } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
// import contactHome from "../assets/contactHome.png"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const userData = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logoutRedux());
  //   toast.success('Logout successful');
  // };

  useEffect(() => {
    // Update the state when the window is resized
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
    <nav className="shadow bg-gray-50 dark:bg-gray-900" >
      <div className="container px-3 pb-2 pt-3 mx-auto">
        <div className="lg:flex lg:items-center ">
          <div className="flex items-center justify-between">
            <div className='flex'>
              {/* Company Logo */}
              <div className='h-20 w-30'>
                <Link to={"/"}>
                  <img src={logo} alt='VK logo' className='h-full w-full' />
                </Link>
              </div>

              {/* Company Name and Address */}
              <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '15px' }}>
                <Link to={"https://narelacity.com/b-detail.php?b=V.+K.+WELDING+WORKS&n=357&nat=INDUSTRY&cat=MANUFACTURING&ref=bdet"}
                  target='_blank'
                >
                  <div className={`text-gray-900 dark:text-slate-200 ${isOpen || isMobileView ? 'text-3xl' : 'text-3xl'} font-base leading-right`} style={{ fontFamily: 'VintageFont', paddingBottom: '0px', paddingTop: '8px' }}>
                    V.K. Welding Works
                  </div>
                </Link>
                <Link to={"https://goo.gl/maps/7dz3Uk3sTTX5kYmg6"} target='_blank'>
                  <div className={`text-gray-900 dark:text-slate-200 ${isOpen || isMobileView ? 'text-xs' : 'text-base'} flex items-center`} style={{ fontFamily: 'VintageFont' }}>
                    <ImLocation2 className="mr-2" />
                    <div>J-2900 DSIIDC Narela Industrial area, Delhi-110040</div>
                  </div>
                </Link>
                <div />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={handleToggleMenu}
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} mt-4 lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:px-6 lg:py-4 lg:opacity-100 lg:relative lg:flex-1 lg:justify-between`}>
            <div className="flex flex-col text-gray-900 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <Link to={""} className={`mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ${isMobileView ? 'text-2xl' : 'text-base'} ${isOpen || isMobileView ? 'text-xl' : ''} hover:text-gray-900 dark:hover:text-orange-600 hover:text-orange-600`}>
                Home
              </Link>
              <Link to={"products"} className={`mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ${isMobileView ? 'text-2xl' : 'text-base'} ${isOpen || isMobileView ? 'text-xl' : ''} hover:text-gray-900 dark:hover:text-orange-600 hover:text-orange-600`}>
                Products
              </Link>
              <Link to={"customproduct"} className={`mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ${isMobileView ? 'text-2xl' : 'text-base'} ${isOpen || isMobileView ? 'text-xl' : ''} hover:text-gray-900 dark:hover:text-orange-600 hover:text-orange-600`}>
                Custom build
              </Link>
              <Link to={"about"} className={`mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ${isMobileView ? 'text-2xl' : 'text-base'} ${isOpen || isMobileView ? 'text-xl' : ''} hover:text-gray-900 dark:hover:text-orange-600 hover:text-orange-600`}>
                About
              </Link>
              <Link to={"contact"} className={`mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ${isMobileView ? 'text-2xl' : 'text-base'} ${isOpen || isMobileView ? 'text-xl' : ''} hover:text-gray-900 dark:hover:text-orange-600 hover:text-orange-600`}>
                Contact
              </Link>
            </div>
            
            <div className='flex flex-row rounded-3xl p-2 bg-gray-100' onClick={handleCall} style={{cursor: 'pointer'}} >  
              <FcCallback style={{ fontSize: '40px' ,paddingRight:'4px' }} />
                  
              <p className='text-black text-center'> Get a call back <br/>from us </p></div>
            
          </div>
        </div>
      </div>

      {/* <Toaster /> */}
    </nav>
  );
};

export default Header;
