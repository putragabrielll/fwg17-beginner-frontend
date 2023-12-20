import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ChatBox from "../components/Chat"
import { FaCircleCheck } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa"
import ProductImage from "../assets/images/coffee1.png"
import Map from "../assets/images/Map.png"
import Manager from "../assets/images/manager.png"

const Home = () => {
    return (
        <>
            <div>
                {/* Untuk navbar */}
                <div className="bg-[rgba(0,0,0,0.5)] w-full md:fixed z-50">
                    <Navbar />
                </div>

                {/* Untuk konten */}
                <header className="h-screen flex flex-col-reverse md:flex-row">
                    {/* Bagian kiri */}
                    <section className="flex-1 bg-gradient-to-b from-gray-700 to-black flex justify-center items-center">
                        <div className="max-w-md text-white flex flex-col gap-7 my-8 md:my-0">
                            <h1 className="text-5xl">Start Your Day with Coffee and Good Meals</h1>
                            <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                            <div>
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">Get Started</button>
                            </div>
                            <div className="flex justify-between divide-x">
                                <div className="flex flex-1 items-center flex-col">
                                    <div className="text-4xl text-orange-500">90+</div>
                                    <div>Staff</div>
                                </div>
                                <div className="flex flex-1 items-center flex-col">
                                    <div className="text-4xl text-orange-500">30+</div>
                                    <div>Stores</div>
                                </div>
                                <div className="flex flex-1 items-center flex-col">
                                    <div className="text-4xl text-orange-500">800+</div>
                                    <div>Customer</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bagian kanan */}
                    <div className="flex-1 bg-[url('../assets/images/header-right.png')] bg-cover bg-no-repeat bg-center"></div>
                </header>

                <div className="flex flex-col-reverse md:flex-row h-screen md:h-[574px]">
                    {/* Bagian kiri */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="max-w-md my-8 md:my-0">
                            <div className="flex flex-col gap-7">
                                <div className="flex items-center justify-center">
                                    <div className="border-s-8 border-orange-500 leading-7 md:leading-10 max-h-24">
                                        &nbsp;
                                        &nbsp;
                                    </div>
                                    <h1 className="ml-5 text-3xl md:text-5xl">We Provide&nbsp;<span className="text-yellow-800">Good Coffee&nbsp;</span>and&nbsp;<span className="text-yellow-800">Healthy Meals</span></h1>
                                </div>
                                <p className="text-gray-600">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                <div className="flex">
                                    <FaCircleCheck className="text-green-500 text-lg" />
                                    <span className="mx-3 text-gray-600">High quality beans</span>
                                </div>
                                <div className="flex">
                                    <FaCircleCheck className="text-green-500 text-lg" />
                                    <span className="mx-3 text-gray-600">Healthy meals, you can request the ingredients</span>
                                </div>
                                <div className="flex">
                                    <FaCircleCheck className="text-green-500 text-lg" />
                                    <span className="mx-3 text-gray-600">Chat with our staff to get better experience for ordering</span>
                                </div>
                                <div className="flex">
                                    <FaCircleCheck className="text-green-500 text-lg" />
                                    <span className="mx-3 text-gray-600">Free member card with a minimum purchase of IDR 200.000.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1">
                        <div className="bg-[url('../assets/images/staff.png')] h-full bg-cover bg-no-repeat bg-center"></div>
                    </div>
                </div>

                <div className="md:h-screen flex flex-col">
                    {/* Bagian atas */}
                    <div className="flex-1 flex flex-col md:justify-center md:items-center">
                        <section className="flex justify-center items-center">
                            <h1 className="text-5xl text-center">Here is People’s&nbsp;<span className="text-yellow-800">Favorite</span></h1>
                        </section>
                        <div className="flex justify-center items-center">
                            <div className="border-b-8 border-orange-500 leading-10 w-16">
                                &nbsp;
                            </div>
                        </div>
                        <div className="flex mt-6 justify-center items-center">
                            <p className="text-gray-600 text-center">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                        </div>
                    </div>

                    {/* Bagian bawah */}
                    <div className="flex-1 flex flex-col md:flex-row mt-10 md:-mt-10 mx-4 md:mx-36 gap-5 justify-center items-center">

                        <div className="">
                            <div className="flex-1 relative">
                                <img className="w-full" src={ProductImage} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                                <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="h-[200px]"></div>
                        </div>

                        <div className="">
                            <div className="flex-1 relative">
                                <img className="w-full" src={ProductImage} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                                <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="h-[200px]"></div>
                        </div>

                        <div className="">
                            <div className="flex-1 relative">
                                <img className="w-full" src={ProductImage} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                                <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="h-[200px]"></div>
                        </div>

                        <div className="">
                            <div className="flex-1 relative">
                                <img className="w-full" src={ProductImage} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full transition duration-300 ease-in-out hover:scale-110">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center transition duration-300 ease-in-out hover:scale-110">
                                                <MdOutlineShoppingCart className="text-orange-500 text-2xl" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="h-[200px]"></div>
                        </div>

                    </div>
                </div>

                <div className="bg-[#F8F8F8] mt-10 flex flex-col gap-6">
                    {/* Bagian atas */}
                    <div className="pt-10 flex-1 flex flex-col md:justify-center md:items-center">
                        <section className="flex justify-center items-center">
                            <h1 className="text-5xl text-yellow-800 text-center">Visit Our Store&nbsp;<span className="text-black">in the Spot on the Map Below</span></h1>
                        </section>
                        <div className="flex justify-center items-center">
                            <div className="border-b-8 border-orange-500 leading-10 w-16">
                                &nbsp;
                            </div>
                        </div>
                        <div className="flex mt-6 justify-center items-center">
                            <p className="text-gray-600 text-center max-w-md md:max-w-2xl">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        </div>
                    </div>

                    {/* Bagian bawah */}
                    <div className="h-full">
                        <img src={Map} alt="" />
                    </div>
                </div>

                <div className="bg-gradient-to-b from-gray-700 to-black">
                    <div className="flex flex-col md:flex-row p-10 gap-6 items-center">
                        {/* Bagian kiri */}
                        <div className="text-white md:hidden">TESTIMONIAL</div>
                        <div className="flex-1 flex justify-end">
                            <img src={Manager} alt="" />
                        </div>

                        {/* Bagian kanan */}
                        <div className="flex-1 flex flex-col justify-start gap-6">

                            <div className="text-white hidden md:block">TESTIMONIAL</div>
                            <div>
                                <div className="flex justify-start">
                                    <div className="border-s-8 border-orange-500 leading-10 max-h-24">
                                        &nbsp;
                                    </div>
                                    <h3 className="ml-5 text-5xl text-white">Viezh Robert</h3>
                                </div>
                            </div>
                            <div className="text-orange-500 text-lg">Manager Coffe Shop</div>
                            <p className="text-white">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                            <div className="flex items-center gap-6">
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <span className="text-white text-xl">5.0</span>
                            </div>
                            <div className="flex justify-start">
                                <ul className="flex gap-5 items-center">
                                    <li>
                                        <button className="px-5 py-5 bg-white border border-white rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowLeft className="text-xl" /></button>
                                    </li>
                                    <li>
                                        <button className="px-5 py-5 bg-orange-500 border border-orange-500 rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowRight className="text-xl" /></button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="9" viewBox="0 0 76 9" fill="none">
                                <circle cx="38" cy="4" r="4" fill="#DDE0E4"/>
                                <circle cx="55" cy="4" r="4" fill="#DDE0E4"/>
                                <circle cx="72" cy="4" r="4" fill="#DDE0E4"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z" fill="#FF8906"/>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Untuk footer */}
                <Footer />

                {/* Untuk chat */}
                <ChatBox />
            </div>
        </>
    )
}

export default Home