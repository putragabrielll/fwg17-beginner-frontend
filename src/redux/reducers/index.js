import { combineReducers } from "@reduxjs/toolkit"

// redux persist
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import auth from "./auth" // reducer auth login
import profile from "./profile" // reducer auth profile

const authConfig = {
    key: 'auth',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    profile
})

export default reducer