import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Register</Link>
                    </li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar