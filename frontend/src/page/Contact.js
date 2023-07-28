import React, { useRef } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import contactBG from '../assets/contactus.jpg'
const Contact = () => {

  const form = useRef();

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_fsieg0p', 'template_h8jfev4', form.current, 'olZNcjAkAIvqVuZ1t');
      toast.success('Request sent successfully');
    } catch (error) {
      toast.error('Failed to send request');
      console.log(error);
    }
  };



  return (
    <div>

      <section className="bg-white " style={{
        backgroundImage: `url(${contactBG})`,
        opacity: 0.9,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120%',
        position: 'relative',
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div></div>
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 dark:text-orange-600 font-bold hover:text-orange-600 font-bold text-4xl">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-black">Chat to our friendly team</h1>

            <p className="mt-3 text-gray-500 dark:text-white text-lg">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-black">Email</h2>
                <p className="mt-2 text-m text-gray-500 dark:text-white text-lg">Our friendly team is here to help.</p>
                <p className="mt-2 text-m text-blue-500 dark:text-black font-bold hover:text-orange-600 font-semibold">hello@merakiui.com</p>
              </div>
              <Toaster />
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-black">Live chat</h2>
                <p className="mt-2 text-m text-gray-500 dark:text-white text-lg">Our friendly team is here to help.</p>
                <p className="mt-2 text-m text-blue-500 dark:text-black font-bold hover:text-orange-600 font-semibold">Start new chat</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-black">Office</h2>
                <p className="mt-2 text-m text-gray-500 dark:text-white text-lg">Come say hello at our office HQ.</p>
                <p className="mt-2 text-m text-blue-500 dark:text-black font-bold hover:text-orange-600 font-semibold">100 Smith Street Collingwood VIC 3066 AU</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-black">Phone</h2>
                <p className="mt-2 text-m text-gray-500 dark:text-white text-lg">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-2 text-m text-blue-500 dark:text-black font-bold hover:text-orange-600 font-semibold">+1 (555) 000-0000</p>
              </div>
            </div>

            {/* form begins */}
            <div className="p-4 py-6 rounded-lg md:p-8" >
              <form ref={form} encType='multipart/form-data' method="post" onSubmit={formSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-black dark:text-white font-lg font-semibold ">First Name</label>
                    <input name='firstName' id='firstName' type="text" placeholder="First name " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-black rounded-lg dark:placeholder-gray-600 dark:text-black dark:border-black dark:border-2 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-black dark:text-white font-lg font-semibold ">Last Name</label>
                    <input name='lastName' id='lastName' type="text" placeholder="Last name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-black rounded-lg dark:placeholder-gray-600 dark:text-black dark:border-black dark:border-2 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-black dark:text-white font-lg font-semibold ">Email address</label>
                  <input name='email' id='email' type="email" placeholder="abc@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-black rounded-lg dark:placeholder-gray-600 dark:text-black dark:border-black dark:border-2 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-black dark:text-white font-lg font-semibold ">Phone number</label>
                  <input name='phoneNumber' id='phoneNumber' type="number" placeholder="1234567890" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-black rounded-lg dark:placeholder-gray-600 dark:text-black dark:border-black dark:border-2 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>



                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-black dark:text-white font-lg font-semibold ">Message</label>
                  <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-black rounded-lg md:h-56 dark:placeholder-gray-600 dark:text-black -black dark:border-2 gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Explain your query"></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Contact
