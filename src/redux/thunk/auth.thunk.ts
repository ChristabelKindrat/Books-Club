import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserInterface, UserLoginInterface} from "../../interfaces";
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

export const login = createAsyncThunk< any, { user: UserLoginInterface } >(
    'authSlice/login',
    async ({user}, {rejectWithValue})=> {
        try {
           const {data} =  await authService.login(user);
           return data;
        }catch (e) {
            // const error = e as AxiosError
            // return rejectWithValue(error.response?.data);
        }
    }
)