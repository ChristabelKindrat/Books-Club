import {createAsyncThunk} from "@reduxjs/toolkit";
import {TokenData, UserInterface, UserLoginInterface, UserToken} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services/auth.service";

export const register = createAsyncThunk<UserInterface, {user :UserInterface}>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.register(user);
            return data;
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
);

export const login = createAsyncThunk<UserToken,{ user: UserLoginInterface} >(
    'authSlice/login',
    async ({user}, {rejectWithValue})=> {
        try {
            const {data} =  await authService.login(user);
            return data;
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
);

// export const getAccessToken = createAsyncThunk<any, void>(
//     'authSlice/getAccessToken',
//     async (_,{rejectWithValue})=>{
//        try {
//            const {data} = await authService.getAccessToken();
//            return data;
//        }catch (e) {
//            const error = e as AxiosError
//            return rejectWithValue(error.response?.data);
//        }
//     }
// )