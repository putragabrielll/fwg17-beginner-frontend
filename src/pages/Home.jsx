import Navbar from "../components/Navbar"
import { FaCircleCheck } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md";
import Product from "../assets/images/coffee1.png"

const Home = () => {
    return (
        <>
            <div>
                {/* Untuk navbar */}
                <div className="bg-[rgba(0,0,0,0.5)] w-full md:absolute">
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
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md">Get Started</button>
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
                                    <h1 className="ml-5 text-3xl md:text-5xl">We Provide&nbsp;<span className="text-yellow-800">Good Coffee&nbsp;</span>and&nbsp;<span class="text-yellow-800">Healthy Meals</span></h1>
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
                            <h1 className="text-5xl">Here is People’s&nbsp;<span className="text-yellow-800">Favorite</span></h1>
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
                                <img className="w-full" src={Product} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center">
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
                                <img className="w-full" src={Product} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center">
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
                                <img className="w-full" src={Product} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center">
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
                                <img className="w-full" src={Product} alt="" />
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <h1 className="text-2xl my-3.5 mx-2">Hazelnut Latte</h1>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <h2 className="text-orange-500 text-2xl my-3.5 mx-2">IDR 20.000</h2>

                                    <div className="flex items-center mx-2 my-2 gap-4">
                                        <div className="flex-1">
                                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">Buy</button>
                                        </div>
                                        <div className="w-1/4">
                                            <button className="px-5 py-2 border border-orange-500 rounded-md w-full flex justify-center">
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
            </div>
        </>
    )
}

export default Home