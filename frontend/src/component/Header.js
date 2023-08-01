import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
// import { useDispatch } from 'react-redux';
// import { logoutRedux } from '../redux/userSlice';
// import { toast } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';

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

  return (
    <nav className="bg-white shadow dark:bg-gray-900" >
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
                  <div className={`text-slate-200 ${isOpen || isMobileView ? 'text-3xl' : 'text-3xl'} font-base leading-right`} style={{ fontFamily: 'VintageFont', paddingBottom: '0px', paddingTop: '8px' }}>
                    V.K. Welding Works
                  </div>
                </Link>
                <Link to={"https://goo.gl/maps/7dz3Uk3sTTX5kYmg6"} target='_blank'>
                  <div className={`text-slate-200 ${isOpen || isMobileView ? 'text-xs' : 'text-base'} flex items-center`} style={{ fontFamily: 'VintageFont' }}>
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
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
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

            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
              <Link to={"#"} className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.543 5.72713 11.0245 5.72713 11.6229V12.3761C5.72713 12.9745 6.20862 13.456 6.807 13.456H8.083C8.68138 13.456 9.16288 12.9745 9.16288 12.3761V11.6229C9.16288 11.0245 8.68138 10.543 8.083 10.543H6.807ZM16.307 10.543C15.7086 10.543 15.2271 11.0245 15.2271 11.6229V12.3761C15.2271 12.9745 15.7086 13.456 16.307 13.456H17.583C18.1814 13.456 18.6629 12.9745 18.6629 12.3761V11.6229C18.6629 11.0245 18.1814 10.543 17.583 10.543H16.307ZM12 14.15C10.347 14.15 9.02 15.03 8.39 16.366C8.27 16.651 8.514 17 8.846 17H15.154C15.486 17 15.73 16.651 15.61 16.366C14.98 15.03 13.653 14.15 12 14.15ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <Toaster /> */}
    </nav>
  );
};

export default Header;
