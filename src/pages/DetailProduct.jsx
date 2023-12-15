import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../assets/images/coffee1.png"
import { FaStar, FaMinus, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md";

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
                        <img src={Product} alt="product coffee" />
                        <div className="flex max-w-[31.5%] gap-4 justify-between">
                            <img src={Product} alt="product coffee" />
                            <img src={Product} alt="product coffee" />
                            <img src={Product} alt="product coffee" />
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
                            <button className="px-32 py-2 bg-orange-500 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110"><a href="/checkout.html">Buy</a></button>
                            <button className="flex gap-3 items-center px-20 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">
                                <MdOutlineShoppingCart className="text-orange-500 text-xl" />
                                add to cart
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Untuk footer */}
            <Footer />

            {/* Untuk chat */}
            <ChatBox />
        </>
    )
}

export default DetailProduct