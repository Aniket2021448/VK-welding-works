import React from 'react'
import { Link } from 'react-router-dom'
// import Contact from '../page/Contact'

const CompanyInfo = () => {
    return (
        <div>

            <section className='pt-20'>
                <div className="container pt-4 mx-auto bg-white sm:p-6 lg:p-8 rounded-lg bg-white"
                    style={{ maxWidth: "90%", boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="flex flex-wrap -mx-8">
                        <div className="w-full px-8 lg:w-1/2">
                            <div className="pb-12 mb-12 mx-2 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                                <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading text-orange-600">
                                    Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.
                                </h2>
                                <p className="mb-8 leading-loose text-gray-500 dark:text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                                </p>
                                <div className="w-full md:w-1/3">
                                    <Link to={"Contact"}>
                                        <button type="button" className="py-2 px-4 mx-auto bg-orange-600 hover:bg-orange-700 focus:ring-orange-600 focus:ring-offset-orange-200 text-slate-100 w-full transition ease-in duration-200 text-center text-base font-semibold drop-shadow-4xl box-shadow-6xl focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Contact us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-8 lg:w-1/2">
                            <ul className="space-y-12">
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-orange-600 rounded-full font-heading bg-gray-100">
                                            1
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-2 text-3xl font-bold text-orange-600">
                                            Responsive Elements
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-black">
                                            All elements are responsive and provide the best display in all screen size. It&#x27;s magic !
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-orange-600 rounded-full font-heading bg-gray-100">
                                            2
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-2 text-3xl font-bold text-orange-600">
                                            Flexible Team
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-black">
                                            Flexibility is the key. All team is available 24/24 and joinable every day on our hotline.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-orange-600 rounded-full font-heading bg-gray-100">
                                            3
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-2 text-3xl font-bold text-orange-600">
                                            Ecologic Software
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-black">
                                            Our Software are ecologic and responsable. Green is not just a color, it&#x27;s a way of life.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CompanyInfo