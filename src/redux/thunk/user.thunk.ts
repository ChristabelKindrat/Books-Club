import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserInterface} from "../../interfaces";
import {userService} from "../../services/user.service";
import {AxiosError} from "axios";

export const getActiveUser = createAsyncThunk<UserInterface, void>(
    'authSlice/getAccessToken',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await userService.getUser();
            return data;
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
)
