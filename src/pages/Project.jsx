import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import Product from "../assets/images/coffee1.png"
import Karakter1 from "../assets/images/karakter1.png"
import Karakter2 from "../assets/images/karakter2.png"

const Project = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <header className="px-32 h-[305px] bg-[url('../assets/images/product-header.png')] bg-cover bg-no-repeat flex justify-start items-center">
                <h1 className="text-white text-4xl">
                    We Provide Good Coffee and Healthy <br /> Meals
                </h1>
            </header>

            <div className="my-10 flex flex-col gap-8">
                {/* Bagian atas */}
                <div className="flex-1 px-32 flex">
                    <div className="flex-1">
                        <h1 className="text-5xl">Today <span className="text-yellow-800">Promo</span></h1>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <ul className="flex gap-5 items-center">
                            <li>
                                <button className="px-3 py-3 bg-[#E8E8E8] rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowLeft className="text-xl" /></button>
                            </li>
                            <li>
                                <button className="px-3 py-3 bg-orange-500 border border-orange-500 rounded-full transition duration-300 ease-in-out hover:scale-110"><FaArrowRight className="text-xl" /></button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bagian tengah */}
                <div className="flex-1 flex gap-12 justify-between">
                    <div className="bg-[#88B788] flex rounded-r-3xl px-2">
                        <img className="ml-4" src={Karakter2} alt="" />
                        <div className="flex flex-col gap-0.5 justify-center">
                            <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                            <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                            <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                        </div>
                    </div>
                    <div className="bg-[#88B788] flex rounded-3xl px-6">
                        <img className="ml-4" src={Karakter2} alt="" />
                        <div className="flex flex-col gap-0.5 justify-center">
                            <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                            <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                            <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                        </div>
                    </div>
                    <div className="bg-[#88B788] flex rounded-3xl px-6">
                        <img className="ml-4" src={Karakter2} alt="" />
                        <div className="flex flex-col gap-0.5 justify-center">
                            <h3 className="text-md font-bold">HAPPY MOTHER’S DAY!</h3>
                            <span className="text-xs font-thin">Get one of our favorite menu for free!</span>
                            <Link className="text-white text-xs" to={"/product"}>Klaim Kupon</Link>
                        </div>
                    </div>
                    <div className="bg-[#F5C361] flex rounded-l-3xl">
                        <img className="ml-4" src={Karakter1} alt="" />
                        <div className="flex flex-col gap-0.5 justify-center">
                            <h3 className="text-md font-bold">Get a cup of coffee for free on sunday morning</h3>
                            <Link className="text-xs" to={"/product"}>Only at 7 to 9 AM</Link>
                        </div>
                    </div>
                </div>

                {/* Bagian bawah */}
                <div className="px-32">
                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="9" viewBox="0 0 76 9" fill="none">
                        <circle cx="38" cy="4" r="4" fill="#DDE0E4"/>
                        <circle cx="55" cy="4" r="4" fill="#DDE0E4"/>
                        <circle cx="72" cy="4" r="4" fill="#DDE0E4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25441 8.44432C4.24369 8.4444 4.23296 8.44444 4.22222 8.44444C4.21148 8.44444 4.20075 8.4444 4.19003 8.44432H3.91085V8.43314C1.72437 8.27376 0 6.44937 0 4.22222C0 1.99508 1.72437 0.170685 3.91085 0.0113071V0H4.22222H20.877V0.00638229C20.9545 0.0021459 21.0325 0 21.1111 0C23.443 0 25.3333 1.89035 25.3333 4.22222C25.3333 6.55409 23.443 8.44444 21.1111 8.44444C21.0325 8.44444 20.9545 8.4423 20.877 8.43806V8.44432H4.25441Z" fill="#FF8906"/>
                    </svg>
                </div>
            </div>

            <div className="px-32 flex flex-col gap-12">
                {/* Bagian atas */}
                <div>
                    <h1 className="text-5xl">Our <span className="text-yellow-800">Product</span></h1>
                </div>

                {/* Bagian bawah */}
                <div className="flex gap-4">
                    {/* Bagian kiri */}
                    <div className="w-1/4 h-screen bg-black text-white rounded-xl">
                        <form className="mx-3 flex flex-col gap-6 my-6">
                            <div className="flex gap-4">
                                <span className="flex-1">Filter</span>
                                <button className="flex-1" type="reset">Reset Filter</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="search">Search</label>
                                <input className="h-11 border pl-5 rounded-md text-black" type="search" name="search" placeholder="Search Your Product" id="search" />
                            </div>
                            <div className="flex flex-col">
                                <span>Category</span>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="favorite" />
                                    <label htmlFor="favorite">Favorite Product</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="coffee" />
                                    <label htmlFor="coffee">Coffee</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="non-coffee" />
                                    <label htmlFor="non-coffee">Non Coffee</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="foods" />
                                    <label htmlFor="foods">Foods</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="add-on" />
                                    <label htmlFor="add-on">Add-On</label>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span>Sort By</span>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="buy-get" />
                                    <label htmlFor="buy-get">Buy 1 get 1</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="flash-sale" />
                                    <label htmlFor="flash-sale">Flash sale</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="birthday" />
                                    <label htmlFor="birthday">Birthday Package</label>
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11" type="checkbox" name="favorite" id="cheap" />
                                    <label htmlFor="cheap">Cheap</label>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span>Range Price</span>
                                <div className="flex justify-start items-center gap-2">
                                    <input className="h-11 w-full" type="range" name="favorite" id="buy-get" />
                                </div>
                            </div>
                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black transition duration-300 ease-in-out hover:scale-110" type="submit">Apply Filter</button>
                        </form>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1 flex flex-col">

                        <div className="flex gap-4">

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>
                                
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>

                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                        </div>


                        <div className="flex gap-4">

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>
                                
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>

                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                        </div>


                        <div className="flex gap-4">

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>
                                
                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                            <div className="flex-1 max-w-md relative">
                                <div className="bg-black h-78 flex">
                                    <img className="object-fill flex-1" src={Product} alt="" />
                                </div>

                                <div className="bg-white mx-2 absolute -mt-10 shadow-2xl">
                                    <Link className="text-2xl my-3.5 mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                                    <p className="text-gray-600 my-3.5 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <div className="flex gap-3 mx-2">
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <FaStar className="text-orange-500 text-xl" />
                                        <span className="text-gray-600 text-xl">5.0</span>
                                    </div>
                                    <div className="my-3.5">
                                        <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                        <span className="text-orange-500 text-md">IDR 10.000</span>
                                    </div>
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
                                
                                <div className="h-[250px]"></div>
                            </div>

                        </div>

                        <div className="my-10 flex-1 flex justify-center">
                            <ul className="flex gap-5 items-center">
                                <li>
                                    <button className="px-5 py-3 bg-orange-500 border border-orange-500 rounded-full">1</button>
                                </li>
                                <li>
                                    <button className="px-5 py-3 text-[#A0A3BD] bg-[#E8E8E8] rounded-full">2</button>
                                </li>
                                <li>
                                    <button className="px-5 py-3 text-[#A0A3BD] bg-[#E8E8E8] rounded-full">3</button>
                                </li>
                                <li>
                                    <button className="px-5 py-3 text-[#A0A3BD] bg-[#E8E8E8] rounded-full">4</button>
                                </li>
                                <li>
                                    <button className="px-3 py-3 bg-orange-500 border border-orange-500 rounded-full"><FaArrowRight className="text-xl text-white" /></button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Untuk footer */}
            <Footer />

            {/* Untuk chat */}
            <ChatBox />
        </>
    )
}

export default Project