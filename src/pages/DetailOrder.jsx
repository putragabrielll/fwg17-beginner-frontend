import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaRegUser } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlinePhoneInTalk, MdPayment } from "react-icons/md"
import { LiaShippingFastSolid } from "react-icons/lia"
import { TiArrowRepeat } from "react-icons/ti"
import ProductImage from "../assets/images/coffee1.png"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

const DetailOrder = () => {
    const profile = useSelector(state => state.profile.data)

    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="my-20 px-4 md:px-32 flex flex-col gap-12">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-4xl">Order <span className="font-bold">#12354-09893</span></h1>
                    <span className="text-gray-500">21 March 2023 at 10:30 AM</span>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-20 md:gap-6">
                    {/* Bagian kiri */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex justify-start items-center">
                            <span className="text-xl">Order Information</span>
                        </div>

                        <div className="flex-1 gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <FaRegUser className="text-gray-600" />
                                        <span className="text-xl text-gray-600">Full Name</span>
                                    </div>
                                    <span className="text-xl font-semibold">
                                        <Link to={"/profile"}>{profile.fullName}</Link>
                                    </span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <IoLocationOutline className="text-gray-600" />
                                        <span className="text-xl text-gray-600">Address</span>
                                    </div>
                                    <span className="text-xl font-semibold">{profile.address}</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <MdOutlinePhoneInTalk className="text-gray-600" />
                                        <span className="text-xl text-gray-600">Phone</span>
                                    </div>
                                    <span className="text-xl font-semibold">{profile.phoneNumber}</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <MdPayment className="text-gray-600" />
                                        <span className="text-xl text-gray-600">Payment Method</span>
                                    </div>
                                    <span className="text-xl font-semibold">Cash</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <LiaShippingFastSolid className="text-gray-600" />
                                        <span className="text-xl text-gray-600">Shipping</span>
                                    </div>
                                    <span className="text-xl font-semibold">Dine In</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">
                                        <TiArrowRepeat className="text-gray-600 text-lg" />
                                        <span className="text-xl text-gray-600">Status</span>
                                    </div>
                                    <span className="px-2 py-1 bg-[#cdedcb] border border-[#cdedcb] text-[#00A700] rounded-full text-xs">Done</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Total Transaksi</span>
                                    <span className="text-xl font-semibold text-orange-500">Idr 40.000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="h-10 flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex justify-start items-center">
                            <span className="text-xl">Your Order</span>
                        </div>

                        <div className="flex-1 flex flex-col gap-4">

                            <div className="flex bg-gray-100 p-2 gap-4 pr-8">
                                
                                {/* Bagian kiri */}
                                <div className="flex h-[170px]">
                                    <img className="object-fill" src={ProductImage} alt="Product" />
                                </div>

                                {/* Bagian kanan */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="pt-2">
                                        <span className="px-1 py-1 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>
                                    </div>
                                    <h1 className="text-2xl">Hazelnut Latte</h1>
                                    <div className="flex text-gray-600 gap-1 md:gap-3 text-lg">
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
                            </div>

                            <div className="flex bg-gray-100 p-2 gap-4 pr-8">
                                
                                {/* Bagian kiri */}
                                <div className="flex h-[170px]">
                                    <img className="object-fill" src={ProductImage} alt="Product" />
                                </div>

                                {/* Bagian kanan */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="pt-2">
                                        <span className="px-1 py-1 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>
                                    </div>
                                    <h1 className="text-2xl">Hazelnut Latte</h1>
                                    <div className="flex text-gray-600 gap-1 md:gap-3 text-lg">
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
                            </div>
                            
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

export default DetailOrder