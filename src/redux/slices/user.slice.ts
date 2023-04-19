import {createSlice} from "@reduxjs/toolkit";

import {BookInterface, UserBooks, UserInterface} from "../../interfaces";
import {getActiveUser, getUserBooks, getUserWantBooks} from "../thunk/user.thunk";

interface UserStateInterface {
    activeUser: UserInterface | null,
    userBooks:UserBooks[] | null,
    userWantBooks: BookInterface [] | null,
}

const initialUserState: UserStateInterface = {
    activeUser: null,
    userBooks: null,
    userWantBooks: null,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getUserWantBooks.fulfilled,(state, action)=>{
                state.userWantBooks = action.payload
            })
            .addCase(getUserBooks.fulfilled,(state, action)=>{
                state.userBooks = action.payload
            })
            .addCase(getActiveUser.fulfilled,(state, action)=>{
                state.activeUser = action.payload;
            })
});

const {reducer: userReducer} = userSlice;

const userAction = {
    getActiveUser,
    getUserBooks,
    getUserWantBooks
};

export {
    userReducer,
    userAction
};