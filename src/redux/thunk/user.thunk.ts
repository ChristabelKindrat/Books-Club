import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {BookInterface, UserBooks, UserInterface} from "../../interfaces";
import {userService} from "../../services/user.service";

export const getActiveUser = createAsyncThunk<UserInterface, void>(
    'authSlice/getActiveUser',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUser();
            return data;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
);

export const getUserBooks = createAsyncThunk<UserBooks[], number>(
    'authSlice/getUserBooks',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUserBooks(id);
            return data;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
);

export const getUserWantBooks = createAsyncThunk<BookInterface[], number>(
    'authSlice/getUserWantBooks',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUserWantBooks(id);
            return data;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
);
