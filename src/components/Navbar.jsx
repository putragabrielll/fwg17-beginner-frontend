import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="bg-black text-white py-8">
                <ul className="flex gap-10 justify-center items-center max-w-2xl">
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Register</Link>
                    </li>
                    <li>
                        <Link to={"/forgot-password"}>Forgot Password</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar