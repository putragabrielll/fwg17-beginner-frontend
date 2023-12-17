import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaPlus, FaRegTimesCircle, FaRegUser } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductImage from "../assets/images/coffee1.png"
import BRI from "../assets/images/Bank BRI.png"
import DANA from "../assets/images/DANA.png"
import BCA from "../assets/images/Bank BCA.png"
import GOPAY from "../assets/images/GoPay.png"
import OVO from "../assets/images/OVO.png"
import PAYPAL from "../assets/images/PayPal.png"

const CheckOut = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="my-20 px-32 flex flex-col gap-12">

                <header className="flex-1">
                    <h1 className="text-4xl">Payment Details</h1>
                </header>

                <div className="flex-1 flex gap-6">
                    {/* Bagian kiri */}
                    <div className="flex-1 flex flex-col gap-4">

                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xl">Your Order</span>
                                <button className="flex bg-orange-400 border border-orange-400 rounded-md p-2 items-center gap-2">
                                    <FaPlus className="text-black text-sm" />
                                    <p>Add Menu</p>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            {/* Produk 1 */}
                            <div className="flex bg-gray-100 p-2 gap-4 pr-8">
                                {/* Bagian kiri */}
                                <div className="flex h-[170px]">
                                    <img className="object-fill" src={ProductImage} alt="" />
                                </div>
                                {/* Bagian tengah */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="pt-2">
                                        <span className="px-1 py-1 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>
                                    </div>
                                    <h1 className="text-2xl">Hazelnut Latte</h1>
                                    <div className="flex text-gray-600 gap-3 text-lg">
                                        <span>2 pcs</span>
                                        <span>|</span>
                                        <span>Reguler</span>
                                        <span>|</span>
                                        <span>Ice</span>
                                        <span>|</span>
                                        <span>Dine In</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <del className="text-red-600 text-md">IDR 20.000</del>
                                        <span className="text-orange-500 text-xl">IDR 10.000</span>
                                    </div>
                                </div>
                                {/* Bagian kanan */}
                                <div className="flex justify-start items-center">
                                    <button className="flex justify-center">
                                        <FaRegTimesCircle className="text-red-600 text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Produk 2 */}
                            <div className="flex bg-gray-100 p-2 gap-4 pr-8">
                                {/* Bagian kiri */}
                                <div className="flex h-[170px]">
                                    <img className="object-fill" src={ProductImage} alt="" />
                                </div>
                                {/* Bagian tengah */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="pt-2">
                                        <span className="px-1 py-1 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>
                                    </div>
                                    <h1 className="text-2xl">Hazelnut Latte</h1>
                                    <div className="flex text-gray-600 gap-3 text-lg">
                                        <span>2 pcs</span>
                                        <span>|</span>
                                        <span>Reguler</span>
                                        <span>|</span>
                                        <span>Ice</span>
                                        <span>|</span>
                                        <span>Dine In</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <del className="text-red-600 text-md">IDR 20.000</del>
                                        <span className="text-orange-500 text-xl">IDR 10.000</span>
                                    </div>
                                </div>
                                {/* Bagian kanan */}
                                <div className="flex justify-start items-center">
                                    <button className="flex justify-center">
                                        <FaRegTimesCircle className="text-red-600 text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex justify-start items-center">
                            <span className="text-xl">Total</span>
                        </div>

                        <div className="flex-1 bg-gray-100 p-3 gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Order</span>
                                    <span className="text-xl font-medium">Idr. 40.000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Delivery</span>
                                    <span className="text-xl font-medium">Idr. 0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Tax</span>
                                    <span className="text-xl font-medium">Idr. 4000</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Sub Total</span>
                                    <span className="text-xl font-medium">Idr.44.000</span>
                                </div>
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black transition duration-300 ease-in-out hover:scale-110"><Link to={"/history-order"}>Checkout</Link></button>
                                <span className="text-gray-500">We Accept</span>
                                <div className="flex gap-2 justify-between">
                                    <div>
                                        <img src={BRI} alt="Bank BRI" />
                                    </div>
                                    <div>
                                        <img src={DANA} alt="DANA" />
                                    </div>
                                    <div>
                                        <img src={BCA} alt="Bank BCA" />
                                    </div>
                                    <div>
                                        <img src={GOPAY} alt="GoPay" />
                                    </div>
                                    <div>
                                        <img src={OVO} alt="OVO" />
                                    </div>
                                    <div>
                                        <img src={PAYPAL} alt="PayPal" />
                                    </div>
                                </div>
                                <span className="text-gray-500">*Get Discount if you pay with Bank Central Asia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex gap-2">
                    {/* Bagian kiri */}
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="flex-1">
                            <h3 className="text-3xl">Payment Info & Delivery</h3>
                        </div>
                        <div className="flex-1 flex flex-col gap-6">
                            <form className="flex flex-col gap-4" action="">
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="email">Email</label>
                                    <input className="h-12 border rounded-md relative pl-9" type="email" name="email" placeholder="Enter Your Email" id="email" />
                                    <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="full-name">Full Name</label>
                                    <input className="h-11 border rounded-md relative pl-9" type="text" name="full-name" placeholder="Enter Your Full Name" id="full-name" />
                                    <FaRegUser className="absolute text-gray-500 my-[53px] mx-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="address">Address</label>
                                    <input className="h-11 border rounded-md relative pl-9" type="text" name="full-name" placeholder="Enter Your Address" id="address" />
                                    <IoLocationOutline className="absolute text-gray-500 my-[53px] mx-2" />
                                </div>
                            </form>
                            <span className="font-extrabold text-lg">Delivery</span>
                            <div className="flex justify-between">
                                <button className="px-16 py-2 bg-transparent border border-orange-500 rounded-md">Dine in</button>
                                <button className="px-16 py-2 bg-transparent border border-gray-200 rounded-md">Door Delivery</button>
                                <button className="px-16 py-2 bg-transparent border border-gray-200 rounded-md">Pick Up</button>
                            </div>
                        </div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1"></div>
                </div>

            </div>

            {/* Untuk footer */}
            <Footer />

            {/* Untuk chat */}
            <ChatBox />
        </>
    )
}

export default CheckOut