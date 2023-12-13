import { Link } from "react-router-dom"
// import LoginLogo from '../assets/image/login.png'
import LogoCoffee from '../assets/image/logo-coffee.png'
import { FaGoogle, FaFacebookF } from "react-icons/fa";


const Login = () => {
    return (
        <>
            <section>
                <div className="flex h-screen">
                    {/* Bagian kiri */}
                    <div className="bg-cover bg-no-repeat w-1/4 hidden md:block bg-[url('../assets/image/login.png')]"></div>

                    {/* Bagian kanan */}
                    <div className="flex flex-1 flex-col justify-center items-center my-10">

                        <div className="flex flex-1 w-3/4 items-center">
                            <img src={LogoCoffee} alt="Logo Coffee" />
                            <span className="ml-2 text-xl text-yellow-800">Coffee Shop</span>
                        </div>

                        <div className="flex-1 w-3/4 items-center">
                            <h1 className="text-xl text-yellow-800">Login</h1>
                            <div className="mt-4 text-gray-600">Fill out the form correctly</div>
                        </div>

                        <form className="flex flex-col w-3/4 gap-4" action="">
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="email">Email</label>
                                <input className="h-12 border pl-5 rounded-md" type="email" name="email" placeholder="Enter Your Email" id="email" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold my-2" htmlFor="password">Password</label>
                                <input className="h-12 border pl-5 rounded-md" type="password" name="password" placeholder="Enter Your Password" id="password" />
                            </div>
                            <div className="flex justify-end">
                                <a href="/forgot-password.html" className="text-orange-500">Lupa Password?</a>
                            </div>
                            <button className="px-5 py-2 bg-orange-500 border border-orange-500 rounded-md" type="submit"><a href="index.html">Login</a></button>
                        </form>

                        <div className="my-6">
                            <p className="text-gray-600">Not Have An Account? &nbsp;<Link className="text-orange-500" to={"/register"}>Register</Link></p>
                        </div>

                        <div className="flex w-3/4 justify-between gap-4">
                            <button className="flex-1 flex items-center justify-center border-white py-4 rounded-xl shadow-2xl">
                                {/* <img className="h-6 w-6" src="/assets/facebook.png" alt="" /> */}
                                <FaFacebookF />
                                <div className="ml-4 hidden md:block">Facebook</div>
                            </button>
                            <button className="flex-1 flex items-center justify-center border-white py-4 rounded-xl shadow-2xl">
                                {/* <img className="h-6 w-6" src="/assets/google.png" alt="" /> */}
                                <FaGoogle />
                                <div className="ml-4 hidden md:block">Google</div>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login