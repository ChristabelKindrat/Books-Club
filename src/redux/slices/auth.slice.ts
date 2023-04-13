import {createSlice} from "@reduxjs/toolkit";

import {UserInterface} from "../../interfaces";
import {login, register} from "../thunk/auth.thunk";
import {authService} from "../../services/auth.service";

//todo type for error
interface AuthState {
    user: UserInterface | null;
    errors: any,
    isAuth: boolean,
}
const initialUserState: AuthState = {
    user: null,
    errors: null,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialUserState,
    reducers: {
        clearUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action)=>{
                state.isAuth = true
                authService.setTokens(action.payload);
            })
            .addCase(register.fulfilled, (state, action)=>{
                const [type] = action.type.split('/').slice(-1);
                if (type === 'rejected'){
                    state.errors = action.payload;
                }else {
                    state.errors = null;
                }
            })
});

const {reducer: authReducer} = authSlice;

const authAction= {
    register,
    login,
};

export {
    authReducer,
    authAction
};