import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { ImGoogle, ImLocation2 } from 'react-icons/im'
import { RiMapPinFill } from 'react-icons/ri'
import { IoLogoYoutube } from 'react-icons/io'
const Footer = () => {
    return (
        <div>

            <footer className="bg-white dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6" >
                                <Link to={"/"}>
                                    <div className='flex'>
                                        <img src={logo} alt='VK logo' className='h-20 w-30 ' />
                                        <p className=' px-5 py-2 text-black dark:text-white text-2xl'>V.K. <br />Welding Works</p>
                                    </div>
                                </Link>

                                <p className="max-w-sm mt-2 ml-1 text-gray-500 dark:text-gray-400">You wish we make it.</p>
                                <Link to={"https://goo.gl/maps/7dz3Uk3sTTX5kYmg6"} target='_blank'>

                                    <div className='mt-1 text-gray-500 dark:text-gray-400' style={{ display: 'flex', alignItems: 'center' }}>
                                        <ImLocation2 style={{ marginRight: '5px' }} />
                                        <div>J-2900 DSIIDC Narela Industrial area, Delhi-110040</div>
                                    </div>
                                </Link>


                                <div className="flex mt-6 ml-1 gap-5">
                                    {/* Youtube link fo rVK welding */}
                                    <Link to={""}>
                                        <IoLogoYoutube className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />

                                    </Link>

                                    {/* Google search for VK welding works */}
                                    <Link to={"https://narelacity.com/b-detail.php?b=V.+K.+WELDING+WORKS&n=357&nat=INDUSTRY&cat=MANUFACTURING&ref=bdet"}
                                        target='_blank'>
                                        <ImGoogle className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
                                    </Link>

                                    {/* Map location for VK welding works */}
                                    <Link to={"https://goo.gl/maps/7dz3Uk3sTTX5kYmg6"} target='_blank'>
                                        <RiMapPinFill className="w-20px h-20px text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                                    <Link to={"#"} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">© vkWeldingWorks@2023 - All rights reserved</p>
                    </div>
                </div>
            </footer>






        </div>
    )
}

export default Footer