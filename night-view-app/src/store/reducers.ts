import { AnyAction, combineReducers, Reducer } from "@reduxjs/toolkit";
import imagesReducer from "../components/ImageContainer/store/imageSlice";
import authReducer from "../components/Auth/store/authSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const authPersist = {
    key: 'auth',
    storage
}

const combinedReducer = combineReducers({
    images: imagesReducer,
    auth: persistReducer(authPersist, authReducer)
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "auth/logout") {
        storage.removeItem("persist:auth");
        state = {} as RootState;
    }
    return combinedReducer(state, action);
}
export default rootReducer;
export type RootState = ReturnType<typeof combinedReducer>;