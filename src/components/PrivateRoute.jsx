import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const [token, setToken] = React.useState(window.localStorage.getItem("token")) // cara 1 untuk ambil token.
    // const {token} = React.useState(window.localStorage.getItem("token")) // cara 2 untuk ambil token.

    if(token){
        return (
            <>{children}</>
        )
    } else {
        return (
            < Navigate to={"/login"} />
        )
    }
}

export default PrivateRoute