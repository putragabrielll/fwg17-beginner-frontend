import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductImage from "../assets/images/coffee1.png"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { IoKeyOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="my-20 px-32 flex flex-col gap-12">

                <div className="flex-1">
                    <h1 className="text-4xl">Profile</h1>
                </div>

                <div className="flex-1 flex gap-4">
                    {/* Bagian kiri */}
                    <div className="w-1/4 border flex flex-col items-center h-1/5 gap-4 p-2">
                        <h3 className="text-xl">Ghaluh Wizard</h3>
                        <span className="text-gray-500">ghaluhwizz@gmail.com</span>
                        <div className="bg-black h-[100px] rounded-full flex overflow-hidden">
                            <img className="object-cover flex-1" src={ProductImage} alt="Logo Coffee" />
                        </div>
                        <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black w-full" type="submit">Upload New Photo</button>
                        <div className="text-gray-500 font-thin">Since <span className="font-bold">20 January 2022</span></div>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex-1 border">
                        <div className="py-2 px-6">
                            <form className="flex flex-col gap-4" action="">
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="full-name">Full Name</label>
                                    <input className="h-11 border rounded-md relative pl-9" type="text" name="full-name" value="Ghaluh Wizard" id="full-name" />
                                    <FaRegUser className="absolute text-gray-500 my-[53px] mx-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="email">Email</label>
                                    <input className="h-12 border rounded-md relative pl-9" type="email" name="email" value="ghaluhwizz@gmail.com" id="email" />
                                    <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="phone">Phone</label>
                                    <input className="h-12 border rounded-md relative pl-9" type="number" name="phone" value="082116304338" id="phone" />
                                    <MdOutlinePhoneInTalk className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <label className="font-semibold my-2" htmlFor="password">Password</label>
                                        <Link className="text-orange-500" to={"/"}>Set New Password</Link>
                                    </div>
                                    <input className="h-12 border rounded-md relative pl-9" type="password" name="password" value="ujicobapassword" id="password" />
                                    <IoKeyOutline className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="address">Address</label>
                                    <input className="h-12 border rounded-md relative pl-9" type="text" name="address" value="Griya Bandung Indah" id="address" />
                                    <IoLocationOutline className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md" type="submit">Submit</button>
                            </form>
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

export default Profile