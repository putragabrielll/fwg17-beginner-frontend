import axios from "axios"
import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaPlus, FaRegTimesCircle, FaRegUser } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import PlacaHolderImage from "../assets/images/img-placeholder.jpeg" // untuk backup jika dari database tidak ada gambar
import BRI from "../assets/images/Bank BRI.png"
import DANA from "../assets/images/DANA.png"
import BCA from "../assets/images/Bank BCA.png"
import GOPAY from "../assets/images/GoPay.png"
import OVO from "../assets/images/OVO.png"
import PAYPAL from "../assets/images/PayPal.png"

// redux
import { useSelector } from "react-redux"

const CheckOut = () => {
    
    // redux
    const token = useSelector(state => state.auth.token)
    const dataCart = useSelector(state => state.cart.data)

    // perhitungan total
    const total = dataCart.reduce((prev, curr) => {
        return prev + (curr.product.price - curr.product.discount) + curr.variant.additionalPrice + curr.size.additionalPrice
    }, 0)
    const ppn = dataCart.reduce((prev) => {
        return prev + total * 0.10
    }, 0)
    const subTotal = dataCart.reduce((prev) => {
        return prev + total + ppn
    }, 0)

    // kirim ke BE
    const navigate = useNavigate()
    const orders = async () => {
        try {
            const formData = new URLSearchParams()
            formData.append('data', JSON.stringify(dataCart))
            
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/orders`,formData, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            navigate('/history-order')
        } catch (err) {
            console.log(err, "masuk ke err")
        }
    }
    

    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="flex">
                <header className="flex-1 p-4 md:p-20">
                    <h1 className="text-4xl">Payment Details</h1>
                </header>
            </div>

            <div className="mb-20 px-4 md:px-20 flex flex-col gap-12">
                
                <div className="flex-1 flex flex-col md:flex-row gap-6">
                    {/* Bagian kiri */}
                    <div className="flex-1 h-full flex flex-col gap-4">

                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-xl">Your Order</span>
                                <Link to={"/product"}>
                                    <button className="flex bg-orange-400 border border-orange-400 rounded-md p-2 items-center gap-2">
                                        <FaPlus className="text-black text-sm" />
                                        <p>Add Menu</p>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            {/* Produk */}
                            {dataCart?.map((data, i) => {
                                let images = data.product.image ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${data.product.image}` : null
                                let flashSale = data.product.discount == null ? null : <span className="px-1 py-1 bg-red-600 border border-red-600 text-white rounded-full">FLASH SALE!</span>

                                return(
                                    <div key={i} className="flex bg-gray-100 p-2 gap-4 pr-8">
                                        {/* Bagian kiri */}
                                        <div className="flex w-36">
                                            <img className="object-cover" src={images || PlacaHolderImage} alt="" />
                                        </div>
                                        {/* Bagian tengah */}
                                        <div className="flex-1 flex flex-col gap-4">
                                            <div className="pt-2">
                                                {flashSale}
                                            </div>
                                            <h1 className="text-2xl">{data.product.name}</h1>
                                            <div className="flex text-gray-600 gap-1 md:gap-3 text-lg">
                                                <span>2 pcs</span>
                                                <span>|</span>
                                                <span>{data.size.size}</span>
                                                <span>|</span>
                                                <span>{data.variant.name}</span>
                                                <span>|</span>
                                                <span>Dine In</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <del className="text-red-600 text-md">IDR {data.product.price}</del>
                                                <span className="text-orange-500 text-xl">IDR {((data.product.price)-(data.product.discount)).toLocaleString('id')}</span>
                                            </div>
                                        </div>
                                        {/* Bagian kanan */}
                                        <div className="flex justify-start items-center">
                                            <button className="flex justify-center">
                                                <FaRegTimesCircle className="text-red-600 text-xl" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1 h-full flex flex-col gap-4">
                        
                        <div className="flex-1 flex justify-start items-center p-2">
                            <span className="text-xl">Total</span>
                        </div>

                        <div className="flex-1 bg-gray-100 p-3 gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Order</span>
                                    <span className="text-xl font-medium">IDR {total.toLocaleString('id')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Delivery</span>
                                    <span className="text-xl font-medium">Idr. 0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Tax</span>
                                    <span className="text-xl font-medium">IDR {ppn.toLocaleString('id')}</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span className="text-xl text-gray-600">Sub Total</span>
                                    <span className="text-xl font-medium">IDR {subTotal.toLocaleString('id')}</span>
                                </div>
                                <button onClick={orders} className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black transition duration-300 ease-in-out hover:scale-110">
                                    <div>
                                        Checkout
                                    </div>
                                </button>
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