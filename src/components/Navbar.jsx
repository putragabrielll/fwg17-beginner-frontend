import React from "react"
import axios from "axios"
import profilePicture from "../assets/images/coffee1.png" // untuk backup jika dari database tidak ada gambar
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"
import { FiCoffee, FiSearch } from "react-icons/fi"
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md"

// redux get token
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction } from "../redux/reducers/auth"
import { setProfile as setProfileData } from "../redux/reducers/profile"

const Navbar = () => {
    const [menuClose, setMenuClose] = React.useState(true)
    // const [profileClose, setProfileClose] = React.useState(true) // untuk dorp down profile (not use)
    // const [token, setToken] = React.useState(window.localStorage.getItem("token"))
    // const [profile, setProfile] = React.useState({}) // get data awal (diganti dengan menggunakan redux)
    const navigation = useNavigate()

    // redux
    const token = useSelector(state => state.auth.token) // get token from redux.
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile.data) // get data user.

    const onLogout = () => {
        // setToken(null) // tidak menggunakan local state lagi
        // window.localStorage.removeItem("token") // tidak menggunakan local storage lagi
        dispatch(logoutAction()) // jadinya menggunakan redux
        navigation('/')
    }

    const getProfile = async() => { // logic untuk get data dari Back End pada saat page pertama di buka.
        if(token){
            const {data} = await axios.get("http://localhost:8000/customer/profile", {
                headers: {
                    'Authorization' :  `Bearer ${token}`
                }
            })
            // console.log(data.results)
            // setProfile(data.results)
            dispatch(setProfileData(data.results))
        }
    }

    React.useEffect(() => {
        getProfile()
    },[])

    return (
        <>
            <div className={`${menuClose ? 'h-16' : ''} overflow-hidden top-0 text-white flex flex-col md:flex-row px-20 md:px-32 py-4 items-center w-full gap-6 md:gap-0`}>
                {/* Bagian kiri */}
                <div className="flex flex-1 gap-8 w-full flex-col md:flex-row">
                    <div className="flex text-xl font-bold tracking-widest justify-between">
                        <Link className="flex gap-2 font-link" to={"/"}>
                            <FiCoffee className="text-white" />
                            Coffee Shop
                        </Link>
                        <ul className="flex gap-6 md:hidden">
                            <li>
                                <MdOutlineShoppingCart className="text-white" />
                            </li>
                            <li>
                                <button onClick={()=>setMenuClose (!menuClose)}>
                                    <MdMenu className="text-white" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex gap-4 flex-1 justify-center flex-col items-center md:items-start md:flex-row">
                        <li className="justify-center items-center md:hidden">
                            <img className="w-14 h-14 rounded-full" src={`http://localhost:8000/uploads/profile/${profile.picture}` || profilePicture} alt="Picture" />
                        </li>
                        <li className="w-full md:w-auto">
                            <Link className="hover:border-b hover:border-orange-500 pb-2 -mt-2" to={"/"}>Home</Link>
                        </li>
                        <li className="w-full md:w-auto ">
                            <Link className="hover:border-b hover:border-orange-500 pb-2 -mt-2" to={"/product"}>Product</Link>
                        </li>
                    </ul>
                </div>

                {/* Bagian kanan */}
                <div className="flex-1 flex w-full">
                    <ul className="flex flex-col md:flex-row gap-5 md:justify-end items-center w-full">
                        <li className="w-full md:w-auto hidden md:block">
                            <a href="#">
                                <FiSearch className="text-white text-xl" />
                            </a>
                        </li>
                        <li className="w-full md:w-auto hidden md:block">
                            <a href="#">
                                <MdOutlineShoppingCart className="text-white text-xl" />
                            </a>
                        </li>
                        {token && 
                        // profile picture
                            <>
                                <li className="w-full md:w-auto hidden md:block">
                                    <img className="h-8 w-8 rounded-full" src={`http://localhost:8000/uploads/profile/${profile.picture}` || profilePicture} alt="Picture" />
                                </li>
                                <li className="w-full md:w-auto">
                                    <button type="button" className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">
                                        <Link to={"/profile"}>Profile</Link>
                                    </button>
                                </li>
                                <li className="w-full md:w-auto">
                                    <button onClick={onLogout} type="button" className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">Log Out</button>
                                </li>
                            </>
                        }
                        {!token && 
                        // section Sign In & Sign Out
                            <>
                                <li className="w-full md:w-auto">
                                    <button className="px-5 py-2 bg-transparent border border-white rounded-md w-full">
                                        <Link to={"/login"}>Sign In</Link>
                                    </button>
                                </li>
                                <li className="w-full md:w-auto">
                                    <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md w-full">
                                        <Link to={"/register"}>Sign Out</Link>
                                    </button>
                                </li>
                            </>
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar