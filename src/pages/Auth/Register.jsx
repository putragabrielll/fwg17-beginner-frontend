import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import LogoCoffee from '../../assets/images/logo-coffee.png'
import { FaGoogle, FaFacebookF, FaRegUser } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Modals from "../../components/Modals"

const Register = () => {
    const [alertMessage, setAlertMessage] = React.useState('')
    const [isHiddenAlert, setIsHiddenAlert] = React.useState(true)
    const [isSuccess, setIsSuccess] = React.useState(true)

    const prosesRegister = async (event) => {
        try {
            event.preventDefault()
            const { value: inputFullName } = event.target.full_name
            const { value: inputEmail } = event.target.email
            const { value: inputPassword } = event.target.password
            const form = new URLSearchParams () // form dalam bentuk x-www-form-urlencoded
            if (inputFullName) {
                form.append( 'fullName', inputFullName)
            }
            if (inputEmail) {
                form.append( 'email', inputEmail)
            }
            if (inputPassword) {
                form.append( 'password', inputPassword)
            }
            if (!inputEmail || !inputPassword) {
                setAlertMessage('Email dan Password Wajib di isi!')
                setIsHiddenAlert(false)
                setIsSuccess(false)
                return 0
            }

            const { data } = await axios.post("http://localhost:8000/auth/register", form.toString())
            // proses apapun
            setAlertMessage(data.message)
            setIsHiddenAlert(false)
            setIsSuccess(true)
            setTimeout(()=>{
                window.location = '/login'
            }, 2000)
        } catch (err) {
            setAlertMessage(err.response.data.message)
            setIsHiddenAlert(false)
            setIsSuccess(false)
        }
    }

    return(
        <>
            <div>
                <div className="flex h-screen">
                    {/* Bagian kiri */}
                    <div className="bg-cover bg-no-repeat w-1/4 hidden md:block bg-[url('../assets/images/register.png')]"></div>

                    {/* Bagian kanan */}
                    <div className="flex flex-1 flex-col justify-center items-center my-10 gap-6">

                        <div className="flex w-3/4 items-center">
                            <img src={LogoCoffee} alt="Logo Coffee" />
                            <p className="ml-2 text-xl text-yellow-800 font-link">Coffee Shop</p>
                        </div>

                        <div className="w-3/4 items-center">
                            <h1 className="text-xl text-yellow-800">Register</h1>
                            <div className="mt-4 text-gray-600">Fill out the form correctly</div>
                        </div>

                        <div className="w-3/4">
                            <Modals message={alertMessage} isHiddenAlert={isHiddenAlert} isSuccess={isSuccess} />
                        </div>

                        <form onSubmit={prosesRegister} className="flex flex-col w-3/4 gap-4" action="">
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="full-name">Full Name</label>
                                <input className="h-11 border rounded-md relative pl-9" type="text" name="full_name" placeholder="Enter Your Full Name" id="full-name" />
                                <FaRegUser className="absolute text-gray-500 my-[53px] mx-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="email">Email</label>
                                <input className="h-12 border rounded-md relative pl-9" type="email" name="email" placeholder="Enter Your Email" id="email" />
                                <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="password">Password</label>
                                <input className="h-12 border rounded-md relative pl-9" type="password" name="password" placeholder="Enter Your Password" id="password" />
                                <RiLockPasswordLine className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="confirm-password">Confirm Password</label>
                                <input className="h-12 border rounded-md relative pl-9" type="password" name="confirm_password" placeholder="Enter Your Password Again" id="confirm-password" />
                                <RiLockPasswordLine className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                            </div>
                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md" type="submit">Register</button>
                        </form>

                        <div className="my-6">
                            <p className="text-gray-600">Have An Account?&nbsp;<Link className="text-orange-500" to={"/login"}>Login</Link> </p>
                        </div>

                        <div className="flex w-3/4 justify-between gap-4">
                            <button className="flex-1 flex items-center justify-center border-white py-4 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110">
                                {/* <img className="h-6 w-6" src="/assets/facebook.png" alt="" /> */}
                                <FaFacebookF />
                                <div className="ml-4 hidden md:block">Facebook</div>
                            </button>
                            <button className="flex-1 flex items-center justify-center border-white py-4 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110">
                                {/* <img className="h-6 w-6" src="/assets/google.png" alt="" /> */}
                                <FaGoogle />
                                <div className="ml-4 hidden md:block">Google</div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register