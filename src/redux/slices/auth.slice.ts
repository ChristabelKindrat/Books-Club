import {createSlice} from "@reduxjs/toolkit";

import {UserInterface} from "../../interfaces";
import { login, register} from "../thunk/auth.thunk";
import {authService} from "../../services/auth.service";

interface AuthState {
    user: UserInterface | null;
    errors: unknown,
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
            // .addCase(getAccessToken.fulfilled,(state, action)=>{
            //     state.authToken = action.payload
            //     console.log(state.authToken);
            // })
            .addCase(login.fulfilled, (state, action)=>{
                authService.setTokens({access: action.payload.accessToken});
                state.isAuth = true
                console.log(state.isAuth);
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
    // getAccessToken
};

export {
    authReducer,
    authAction
};