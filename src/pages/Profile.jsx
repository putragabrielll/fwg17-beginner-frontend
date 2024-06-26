import React from "react"
import ChatBox from "../components/Chat"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilePicture from "../assets/images/coffee1.png" // untuk backup jika dari database tidak ada gambar
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { IoKeyOutline, IoLocationOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import axios from "axios"
import Modals from "../components/Modals"

// redux get token
import { useDispatch, useSelector } from "react-redux"
import { setProfile as setProfileData } from "../redux/reducers/profile" // get data user

const Profile = () => {
    // const [profile, setProfile] = React.useState({}) // get data awal
    // const token = window.localStorage.getItem("token")
    const [previewPicture, setPreviewPicture] = React.useState()

    // untuk alert
    const [alertMessage, setAlertMessage] = React.useState('')
    const [isHiddenAlert, setIsHiddenAlert] = React.useState(true)
    const [isSuccess, setIsSuccess] = React.useState(true)

    // redux
    const token = useSelector(state => state.auth.token) // get token from redux.
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile.data) // get data user from redux
    
    // tidak mengambil data dari getProfile lagi karena sudah menggunakan redux.
    // const getProfile = async() => { // logic untuk get data dari Back End pada saat page pertama di buka.
    //     setIsHiddenAlert(true)
    //     const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, {
    //         headers: {
    //             'Authorization' :  `Bearer ${token}`
    //         }
    //     })
    //     // console.log(data.results)
    //     // setProfile(data.results)
    //     dispatch(setProfileData(data.results))
    // }

    // tidak menggunakan userEffect lagi karena sudah menggunakan redux.
    // React.useEffect(() => {
    //     // getProfile()
    // }, [])

    const updateProfileData = async(e) => { // logic untuk update data form ke Back End.
        try {
            e.preventDefault()
            const form = new FormData()
            const dataUpdate = ['fullName', 'email', 'password', 'phoneNumber', 'address']
            
            dataUpdate.forEach((field) => {
                if(e.target[field]){
                    form.append(field, e.target[field].value)
                }
            })
            const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form ,{
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Authorization' : `Bearer ${token}`
                }
            })
            // setProfile(data.results)
            dispatch(setProfileData(data.results))
            setAlertMessage(data.message)
            setIsHiddenAlert(false)
            setIsSuccess(true)
            setTimeout(() => {
                setIsHiddenAlert(true)
            }, 3000)
        } catch(err) {
            setAlertMessage(err.response.data.message)
            setIsHiddenAlert(false)
            setIsSuccess(false)
            setTimeout(() => {
                setIsHiddenAlert(true)
            }, 3000)
        }
    }

    const chagePicture = (e) => { // logic untuk mereview image yg terbaru
        const picture = URL.createObjectURL(e.target.files[0])
        // console.log('url', reviewNewPicture)
        setPreviewPicture(picture)
    }

    const uploadPicture = async(e) => { // logic untuk update picture profile
        try{
            e.preventDefault()
            const [file] = e.target.picture.files // files adalah sebuah array, makanya di line 72 files nya dengan index ke [0].
            if(file){
                const form = new FormData()
                form.append('picture', file)
                const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/profile`, form ,{
                    headers: {
                        'Content-Type' : 'multipart/form-data',
                        'Authorization' : `Bearer ${token}`
                    }
                })
                // setProfile(data.results)
                dispatch(setProfileData(data.results))
                setAlertMessage(data.message)
                setIsHiddenAlert(false)
                setIsSuccess(true)
                setTimeout(() => {
                    setIsHiddenAlert(true)
                    setPreviewPicture(null)
                }, 3000)
            }
        } catch(err) {
            setAlertMessage(err.response.data.message)
            setIsHiddenAlert(false)
            setIsSuccess(false)
            setTimeout(() => {
                setIsHiddenAlert(true)
                setPreviewPicture(null)
            }, 3000)
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

                        <form onSubmit={uploadPicture} className="flex flex-col gap-4 justify-center items-center">
                            <label className="bg-black h-[100px] w-[100px] rounded-full flex overflow-hidden relative">
                                {(!previewPicture && profile.picture) && <img className="object-cover flex-1" src={`${profile.picture}` || profilePicture} alt="Picture" />}
                                {previewPicture && 
                                    <>
                                        <img className="object-cover flex-1" src={previewPicture} alt="Picture" /> 
                                        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.3)]" />
                                    </>
                                }
                                <input multiple={false} accept=".jpg, .png, .jpeg" onChange={chagePicture} type="file" name="picture" className="hidden" />
                            </label>
                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md text-black w-full" type="submit">Upload New Photo</button>
                        </form>

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