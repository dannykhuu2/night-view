import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "./types";

export interface AuthAppState {
    user: {
        id: number | null,
        email: string 
        error: any
    }
}

const initialState: AuthAppState = {
    user: {
        id: null,
        email: "",
        error: null
    }
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAction : (_state ) => {},
        setUserSuccessAction: (state, { payload }: PayloadAction<UserType>) => {
            state.user.id = payload.id;
            state.user.email = payload.email;
        },
        setUserFailAction: (state, { payload }: PayloadAction<any>) => {
            state.user.error = payload;
        }
    }
})

export const { setUserAction, setUserSuccessAction, setUserFailAction } = slice.actions;
export default slice.reducer;