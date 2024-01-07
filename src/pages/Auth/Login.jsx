import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import LogoCoffee from '../../assets/images/logo-coffee.png'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Modals from "../../components/Modals"

// redux action
import { useDispatch, useSelector } from "react-redux"
import { login as loginAction } from "../../redux/reducers/auth"


const Login = () => {
    const inputEmail = React.useRef()
    const inputPassword = React.useRef()
    const [alertMessage, setAlertMessage] = React.useState('')
    const [isHiddenAlert, setIsHiddenAlert] = React.useState(true)
    const [isSuccess, setIsSuccess] = React.useState(true)
    // const [token, setToken] = React.useState(window.localStorage.getItem("token"))
    const navigation = useNavigate()

    // redux
    const token = useSelector(state => state.auth.token) // gantinya mengambil token di line 22 dari window.localStorage.getItem("token")
    const dispatch = useDispatch()

    React.useEffect(() => { // untuk mengecek jika memiliki token atau sudah login maka tidak bisa akses page login.
        if(token){
            navigation('/')
        }
    }, [token, navigation]) // [token] artinya saat kondisi memiliki token, makan if yg di atas di jalankan.

    const processLogin = async (event) => {
        console.log(event)
        try {
            event.preventDefault()
            setIsHiddenAlert(true) // Hiden alert pada saat awalnya login salah dan akan menampilkan alert kembali saat percobaan ke 2.
            const { value: email } = event.target.email
            const { value: password } = event.target.password
            const form = new URLSearchParams() // form dalam bentuk x-www-form-urlencoded
            form.append ('password', password)
            form.append ( 'email', email) 

            const { data } = await axios.post("http://localhost:8000/auth/login", form.toString())
            const {token: resultToken} = data.results // proses pengambilan token
            
            // proses alert onlogin
            setAlertMessage(data.message)
            setIsHiddenAlert(false)
            setIsSuccess(true)

            setTimeout(()=>{
                // setToken(resultToken) // di pindahin karena setToken akan di isi ketikan menunggu waktu 2 detik dulu, agar useEffect di atas bisa terpakai dan alert bisa terpanggil.
                // window.localStorage.setItem("token", resultToken) // memberikan token ke local storage pada browser.
                // window.location = '/' // hindari penggunaan window.location dan menggantinya dengan menggunakan navigation / useNavigate.
                dispatch(loginAction(resultToken))
                navigation('/')
            }, 2000)
        } catch (err) {
            setAlertMessage(err.response.data.message)
            setIsHiddenAlert(false)
            setIsSuccess(false)
        }

    }
    return (
        <>
            <div>
                <div className="flex h-screen">
                    {/* Bagian kiri */}
                    <div className="bg-cover bg-no-repeat w-1/4 hidden md:block bg-[url('../assets/images/login.png')]"></div>

                    {/* Bagian kanan */}
                    <div className="flex flex-1 flex-col justify-center items-center my-10 gap-6">

                        <div className="flex w-3/4 items-center">
                            <img src={LogoCoffee} alt="Logo Coffee" />
                            <span className="ml-2 text-xl text-yellow-800 font-link">Coffee Shop</span>
                        </div>

                        <section className="w-3/4 items-center">
                            <h1 className="text-xl text-yellow-800">Login</h1>
                            <div className="mt-4 text-gray-600">Fill out the form correctly</div>
                        </section>

                        {/* Alert login */}
                        <div className="w-3/4">
                            <Modals message={alertMessage} isHiddenAlert={isHiddenAlert} isSuccess={isSuccess}/>
                        </div>

                        <form onSubmit={processLogin} className="flex flex-col w-3/4 gap-4" action="">
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="email">Email</label>
                                <input ref={inputEmail} className="h-12 border rounded-md relative pl-9" type="email" name="email" placeholder="Enter Your Email" id="email" />
                                <MdOutlineEmail className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="password">Password</label>
                                <input ref={inputPassword} className="h-12 border rounded-md relative pl-9" type="password" name="password" placeholder="Enter Your Password" id="password" />
                                <RiLockPasswordLine className="absolute text-gray-500 my-[53px] mx-2 text-xl" />
                            </div>
                            <div className="flex justify-end">
                                <Link className="text-orange-500" to={"/forgot-password"}>Lupa Password?</Link>
                            </div>
                            <button type="submit" className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md">Login</button>
                        </form>

                        <div className="my-6">
                            <p className="text-gray-600">Not Have An Account? &nbsp;<Link className="text-orange-500" to={"/register"}>Register</Link></p>
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

export default Login