import { combineReducers } from "@reduxjs/toolkit";
import imagesReducer from "../components/ImageContainer/store/imageSlice";
import authReducer from "../components/Auth/store/authSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const authPersist = {
    key: 'auth',
    storage
}

export const rootReducer = combineReducers({
    images: imagesReducer,
    auth: persistReducer(authPersist, authReducer)
})