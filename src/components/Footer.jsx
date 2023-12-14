import LogoCoffee from "../assets/images/logo-coffee.png"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer className="bg-[#F8F8F8]">
                <div className="flex flex-col md:flex-row py-16 px-10 gap-6">
                    
                    <div className="flex-1 flex flex-col justify-center gap-8">
                            <div className="flex">
                                <img src={LogoCoffee} alt="Logo Coffee" />
                                <p className="ml-2 text-xl text-yellow-800 font-link">Coffee Shop</p>
                            </div>
                            <div className="text-[#4F5665]">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</div>
                            <span className="text-sm text-gray-600">©2020CoffeeStore</span>
                    </div>

                    <div className="flex-1">
                        <ul className="flex flex-col gap-4">
                            <li className="font-bold text-xl">Product</li>
                            <li className="font-normal">Our Product</li>
                            <li className="font-normal">Pricing</li>
                            <li className="font-normal">Locations</li>
                            <li className="font-normal">Countries</li>
                            <li className="font-normal">Blog</li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <ul className="flex flex-col gap-4">
                            <li className="font-bold text-xl">Engage</li>
                            <li className="font-normal">Partner</li>
                            <li className="font-normal">FAQ</li>
                            <li className="font-normal">About Us</li>
                            <li className="font-normal">Privacy Policy</li>
                            <li className="font-normal">Terms of Service</li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <span className="font-bold text-xl">Social Media</span>
                        <div className="flex">
                            <ul className="flex gap-5 items-center">
                                <li>
                                    <button className="px-2 py-2 bg-orange-500 border-orange-500 rounded-full"><FaFacebookF /></button>
                                </li>
                                <li>
                                    <button className="px-2 py-2 bg-orange-500 border border-orange-500 rounded-full"><FaTwitter /></button>
                                </li>
                                <li>
                                    <button className="px-2 py-2 bg-orange-500 border border-orange-500 rounded-full"><FaInstagram /></button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer