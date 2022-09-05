import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "./types";

export interface AuthAppState {
    user: {
        id: number,
        email: string 
    } | null,
    error: any
}

const initialState: AuthAppState = {
    user: null,
    error: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAction : (_state ) => {},
        setUserSuccessAction: (state, { payload }: PayloadAction<UserType>) => {
            state.user = {
                id: payload.id,
                email: payload.email
            }
        },
        setUserFailAction: (state, { payload }: PayloadAction<any>) => {
            state.error = payload;
        },
        logout: () => {}
    }
})

export const { setUserAction, setUserSuccessAction, setUserFailAction, logout } = slice.actions;
export default slice.reducer;