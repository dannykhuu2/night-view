import saga from "redux-saga";
import { all, fork } from 'redux-saga/effects'
import { configureStore } from "@reduxjs/toolkit";
import { imagesSaga } from "../components/ImageContainer/store/imageSaga";
import { rootReducer } from "./reducers";
import persistStore from "redux-persist/es/persistStore";
import { authSaga } from "../components/Auth/store/authSaga";

function* RootSaga() {
    yield all([imagesSaga, authSaga].map((saga) => fork(saga)));
}

const sagaMiddleware = saga();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false
        }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(RootSaga);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>