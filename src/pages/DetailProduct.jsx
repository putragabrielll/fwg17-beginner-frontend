import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ProductImage from "../assets/images/coffee1.png"
import { FaStar, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"

const DetailProduct = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>
            
            <div className="flex px-32 my-20 gap-4">
                {/* Bagian kiri */}
                <div className="flex-1 flex items-center">
                    <div className="max-w-xl flex flex-col gap-4">
                        <img src={ProductImage} alt="product coffee" />
                        <div className="flex max-w-[31.5%] gap-4 justify-between">
                            <img src={ProductImage} alt="product coffee" />
                            <img src={ProductImage} alt="product coffee" />
                            <img src={ProductImage} alt="product coffee" />
                        </div>
                    </div>
                </div>

                {/* Bagian kanan */}
                <section className="flex-1">
                    <div className="max-w-xl flex flex-col gap-4">
                        <div className="py-2">
                            <span className="px-2 py-2 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>
                        </div>
                        <h1 className="text-4xl">Hazelnut Latte</h1>
                        <div className="flex items-center gap-2">
                            <del className="text-red-600 text-xs">IDR 20.000</del>
                            <span className="text-orange-500 text-md">IDR 10.000</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaStar className="text-orange-500 text-xl" />
                            <FaStar className="text-orange-500 text-xl" />
                            <FaStar className="text-orange-500 text-xl" />
                            <FaStar className="text-orange-500 text-xl" />
                            <FaStar className="text-orange-500 text-xl" />
                            <span className="text-black text-xl">5.0</span>
                        </div>
                        <div className="flex gap-3">
                            <span>200+ Review</span>
                            <span>|</span>
                            <span>Recommendation</span>
                            <i className="text-orange-500 text-xl" data-feather="thumbs-up"></i>
                        </div>
                        <span>
                            Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                        </span>
                        <div className="flex items-center gap-5">
                            <button className="bg-transparent border border-orange-500 rounded-sm p-2"><FaMinus className="text-sm" /></button>
                            <div>1</div>
                            <button className="bg-orange-500 border border-orange-500 rounded-sm p-2"><FaPlus className="text-sm" /></button>
                        </div>
                        <span className="font-semibold text-lg">Choose Size</span>
                        <div className="flex justify-between">
                            <button className="px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Regular</button>
                            <button className="px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Medium</button>
                            <button className="px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Large</button>
                        </div>
                        <span className="font-semibold text-lg">Hot/Ice?</span>
                        <div className="flex justify-between">
                            <button className="px-32 py-2 bg-transparent border border-orange-500 rounded-sm">Ice</button>
                            <button className="px-32 py-2 bg-transparent border border-orange-500 rounded-sm">Hot</button>
                        </div>
                        <div className="flex justify-between my-16">
                            <button className="px-32 py-2 bg-orange-500 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">
                                <Link to={"/checkout"}>Buy</Link>
                            </button>
                            <button className="flex gap-3 items-center px-20 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">
                                <MdOutlineShoppingCart className="text-orange-500 text-xl" />
                                add to cart
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="h-screen mb-20 flex flex-col gap-8 px-32">
                <h1 className="text-5xl">Recommendation <span className="text-yellow-800">For You</span></h1>
                
                <div className="flex gap-5">

                    <div className="flex-1 max-w-md relative">
                        <div className="bg-black h-78 flex">
                            <img className="object-fill flex-1" src={ProductImage} alt="" />
                        </div>
                        
                        <div className="flex flex-col bg-white mx-2 absolute -mt-10 shadow-2xl py-2 gap-6">
                            <Link className="text-2xl mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                            <p className="text-gray-600 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <div className="flex gap-3 mx-2">
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <span className="text-gray-600 text-xl">5.0</span>
                            </div>
                            <div className="">
                                <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                <span className="text-orange-500 text-md">IDR 10.000</span>
                            </div>
                            <div className="flex items-center mx-2 gap-4">
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
                            <img className="object-fill flex-1" src={ProductImage} alt="" />
                        </div>
                        
                        <div className="flex flex-col bg-white mx-2 absolute -mt-10 shadow-2xl py-2 gap-6">
                            <Link className="text-2xl mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                            <p className="text-gray-600 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <div className="flex gap-3 mx-2">
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <span className="text-gray-600 text-xl">5.0</span>
                            </div>
                            <div className="">
                                <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                <span className="text-orange-500 text-md">IDR 10.000</span>
                            </div>
                            <div className="flex items-center mx-2 gap-4">
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
                            <img className="object-fill flex-1" src={ProductImage} alt="" />
                        </div>
                        
                        <div className="flex flex-col bg-white mx-2 absolute -mt-10 shadow-2xl py-2 gap-6">
                            <Link className="text-2xl mx-2" to={"/detail-product"}>Hazelnut Latte</Link>
                            <p className="text-gray-600 mx-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <div className="flex gap-3 mx-2">
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <FaStar className="text-orange-500 text-xl" />
                                <span className="text-gray-600 text-xl">5.0</span>
                            </div>
                            <div className="">
                                <del className="text-red-600 text-xs mx-2">IDR 20.000</del>
                                <span className="text-orange-500 text-md">IDR 10.000</span>
                            </div>
                            <div className="flex items-center mx-2 gap-4">
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

            {/* Untuk footer */}
            <Footer />

            {/* Untuk chat */}
            <ChatBox />
        </>
    )
}

export default DetailProduct