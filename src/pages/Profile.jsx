import React from "react"
import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductImage from "../assets/images/coffee1.png"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { IoKeyOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom"
import axios from "axios"
import Modals from "../components/Modals"

const Profile = () => {
    const [profile, setProfile] = React.useState({})
    const [alertMessage, setAlertMessage] = React.useState('')
    const [isHiddenAlert, setIsHiddenAlert] = React.useState(true)
    const [isSuccess, setIsSuccess] = React.useState(true)
    const token = window.localStorage.getItem("token")
    
    const getProfile = async() => { // logic untuk get data dari Back End
        setIsHiddenAlert(true)
        const {data} = await axios.get("http://localhost:8000/customer/profile", {
            headers: {
                'Authorization' :  `Bearer ${token}`
            }
        })
        console.log(data.results)
        setProfile(data.results)
    }

    React.useEffect(() => {
        getProfile()
    }, [])

    const updateProfileData = async(e) => { // logic untuk update data ke Back End.
        try {
            e.preventDefault()
            const form = new FormData()
            const dataUpdate = ['fullName', 'email', 'password', 'phoneNumber', 'address']
            dataUpdate.forEach((field) => {
                if(e.target[field]){
                    form.append(field, e.target[field].value)
                }
            })
            const {data} = await axios.patch("http://localhost:8000/customer/profile", form ,{
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' :  `Bearer ${token}`
                }
            })
            setProfile(data.results)
            setAlertMessage(data.message)
            setIsHiddenAlert(false)
            setIsSuccess(true)
            setTimeout(() => {
                setIsHiddenAlert(true)
            }, 2000)
        } catch(err) {
            setAlertMessage(err.response.data.message)
            setIsHiddenAlert(false)
            setIsSuccess(false)
            setTimeout(() => {
                setIsHiddenAlert(true)
            }, 2000)
        }
    }

    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>

            <div className="my-20 px-4 md:px-32 flex flex-col gap-12">

                <div className="flex-1">
                    <h1 className="text-4xl">Profile</h1>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-4">
                    {/* Section profile */}
                    <div className="md:w-1/4 border flex flex-col items-center h-1/5 gap-4 p-2">
                        <h3 className="text-xl">{profile.fullName}</h3>
                        <span className="text-gray-500">{profile.email}</span>
                        <div className="bg-black h-[100px] rounded-full flex overflow-hidden">
                            <img className="object-cover flex-1" src={ProductImage} alt="Logo Coffee" />
                        </div>
                        <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black w-full" type="submit">Upload New Photo</button>
                        <div className="text-gray-500 font-thin">Since <span className="font-bold">20 January 2022</span></div>
                    </div>

                    {/* Section form */}
                    <div className="flex-1 border">
                        <div className="py-2 px-6">
                            {/* Alert */}
                            <Modals message={alertMessage} isHiddenAlert={isHiddenAlert} isSuccess={isSuccess}/>
                            <form onSubmit={updateProfileData} className="flex flex-col gap-4" action="">
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="full-name">Full Name</label>
                                    <input defaultValue={profile.fullName} className="h-11 border rounded-md relative pl-9" type="text" name="fullName" id="full-name" />
                                    <FaRegUser className="absolute text-gray-500 my-[53px] mx-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="email">Email</label>
                                    <input defaultValue={profile.email} className="h-12 border rounded-md relative pl-9" type="email" name="email" id="email" />
                                    <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="phone">Phone</label>
                                    <input defaultValue={profile.phoneNumber} className="h-12 border rounded-md relative pl-9" type="text" name="phoneNumber" id="phone" />
                                    <MdOutlinePhoneInTalk className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <label className="font-semibold my-2" htmlFor="password">Password</label>
                                        <Link className="text-orange-500" to={"/"}>Set New Password</Link>
                                    </div>
                                    <input className="h-12 border rounded-md relative pl-9" type="password" name="password" placeholder="Enter your new password!" id="password" />
                                    <IoKeyOutline className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold my-2" htmlFor="address">Address</label>
                                    <input defaultValue={profile.address} className="h-12 border rounded-md relative pl-9" type="text" name="address" id="address" />
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