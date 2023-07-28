import React from 'react';
import { Link } from 'react-router-dom';


const Productcard = ({ name, image, description }) => {

    return (
        <div className='p-4 my-10 '>
            <div className='flex flex-col items-center justify-center w-full max-w-md mx-auto'>
                <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}>
                    <div
                        style={{

                            background: `url(${image}) no-repeat center center`,
                            backgroundSize: 'cover',
                            height: '250px', // Set a fixed height for the image container
                        }}
                    ></div>

                    <div className="py-5 text-center">
                        <Link to={"#"} className="block text-xl font-bold text-gray-800 dark:text-gray-900" tabIndex="0" role="link">{name}</Link>
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                        <button className='p-2 px-6 m-2 text-m font-semibold text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded hover:bg-orange-500 dark:hover:bg-orange-700 focus:bg-orange-500 dark:focus:bg-orange-700 focus:outline-none'>
                            Get Quote
                        </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
        
    );
};

export default Productcard;




// <div
//     className='w-64 -mt-10 overflow-hidden bg-slate-50 rounded-lg shadow-xl md:w-64 transition-transform transform hover:scale-105 hover:shadow-2xl'>
//     <div
//         style={{

//             background: `url(${image}) no-repeat center center`,
//             backgroundSize: 'cover',
//             height: '250px', // Set a fixed height for the image container
//         }}
//     ></div>