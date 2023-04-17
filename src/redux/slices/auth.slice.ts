import {createSlice} from "@reduxjs/toolkit";

import {UserInterface} from "../../interfaces";
import {login, register} from "../thunk/auth.thunk";
import {authService} from "../../services/auth.service";

interface AuthState {
    user: UserInterface | null;
    errorFromBack: string,
    isAuth: boolean,
    registeredUser: UserInterface | null,
}
const initialUserState: AuthState = {
    user: null,
    errorFromBack: '',
    isAuth: false,
    registeredUser: null,
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
                authService.setTokens({access: action.payload.accessToken});
                state.isAuth = true;
            })
            .addCase(login.rejected,(state, {payload}: any)=>{
               state.errorFromBack = payload.error ?? 'Something went Wrong';
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.registeredUser = action.payload;
                console.log(state.registeredUser);
                const [type] = action.type.split('/').slice(-1);
                if (type === 'rejected'){
                    // state.errorFromBack = action.payload?.message;
                }else {
                    // state.errorFromBack = null;
                }
            })
            .addCase(register.rejected,(state, {payload}: any)=>{
                state.errorFromBack = payload.error ?? 'Something went Wrong';
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