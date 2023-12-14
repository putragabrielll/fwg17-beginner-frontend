import { Link } from "react-router-dom"
import { FiCoffee, FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className="top-0 text-white flex flex-col md:flex-row px-20 md:px-32 py-4 items-center w-full gap-6 md:gap-0">
                {/* Bagian kiri */}
                <div className="flex flex-1 gap-8 w-full flex-col md:flex-row">
                    <div className="flex text-xl font-bold tracking-widest justify-between">
                        <a className="flex gap-2" href="#">
                            <FiCoffee className="text-white" />
                            <div className="font-link">
                                Coffee Shop
                            </div>
                        </a>
                        <ul className="flex gap-6 md:hidden">
                            <li>
                                <MdOutlineShoppingCart className="text-white" />
                            </li>
                            <li>
                                <MdMenu className="text-white" />
                            </li>
                        </ul>
                    </div>
                    <ul className="flex gap-8 flex-1 justify-center flex-col items-center md:items-start md:flex-row">
                        <li className="w-full md:w-auto">
                            <Link className="hover:border-b hover:border-orange-500 pb-2 -mt-2" to={"/login"}>Login</Link>
                        </li>
                        <li className="w-full md:w-auto ">
                            <Link className="hover:border-b hover:border-orange-500 pb-2 -mt-2" to={"/register"}>Register</Link>
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
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar