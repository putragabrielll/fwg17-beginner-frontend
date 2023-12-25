import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ProductImage from "../assets/images/coffee1.png"
import { FaStar, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import ProductCard from "../components/ProductCard"

const DetailProduct = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>
            
            <div className="flex flex-col md:flex-row px-4 md:px-32 my-20 gap-4">
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
                        <div className="flex justify-between gap-2">
                            <button className="flex-1 px-4 md:px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Regular</button>
                            <button className="flex-1 px-4 md:px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Medium</button>
                            <button className="flex-1 px-4 md:px-16 py-2 bg-transparent border border-orange-500 rounded-sm">Large</button>
                        </div>
                        <span className="font-semibold text-lg">Hot/Ice?</span>
                        <div className="flex justify-between gap-2">
                            <button className="flex-1 px-4 md:px-32 py-2 bg-transparent border border-orange-500 rounded-sm">Ice</button>
                            <button className="flex-1 px-4 md:px-32 py-2 bg-transparent border border-orange-500 rounded-sm">Hot</button>
                        </div>
                        <div className="flex justify-between my-16 gap-2">
                            <button className="w-6/12 md:w-1/4 md:px-32 py-2 bg-orange-500 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">
                                <Link to={"/checkout"}>Buy</Link>
                            </button>
                            <button className="flex-1 flex gap-3 justify-center items-center md:px-20 border border-orange-500 rounded-md transition duration-300 ease-in-out hover:scale-110">
                                <MdOutlineShoppingCart className="text-orange-500 text-xl" />
                                add to cart
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="h-screen mb-20 flex flex-col gap-8 px-4 md:px-32">
                <h1 className="text-5xl">Recommendation <span className="text-yellow-800">For You</span></h1>
                
                <div className="flex gap-5">

                    <div>
                        <ProductCard image={ProductImage} ShowCardButton={true} name='Americano' discount={5000} price={100000} description='Caffè Americano atau Amerikano adalah minuman kopi yang dibuat dengan mencampurkan satu seloki espresso dengan air panas. Air panas yang digunakan dalam minuman ini adalah sebanyak 6 hingga 8 ons.' />
                    </div>
                    <div>
                        <ProductCard image={ProductImage} ShowCardButton={false} name='Latte' discount={5000} price={100000} description='YLatte atau Caffè latte adalah espreso atau kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya. Perbandingan antara susu dengan kopi pada caffè latte adalah 2:1.' />
                    </div>
                    <div className="hidden md:block">
                        <ProductCard image={ProductImage} ShowCardButton={true} name='Orange Juice' discount={5000} price={100000} description='Jus jeruk atau orange juice atau populer dengan sebutan OJ merupakan air jeruk murni tanpa tambahan air, es ataupun gula. Jus ini berupa air yang keluar saat jeruk jenis navel diperas.' />
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