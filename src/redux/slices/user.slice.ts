import {createSlice} from "@reduxjs/toolkit";
import {UserInterface} from "../../interfaces";
import {getActiveUser} from "../thunk/user.thunk";

interface UserStateInterface {
    activeUser: UserInterface | null,
}

const initialUserState: UserStateInterface = {
    activeUser: null,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getActiveUser.fulfilled,(state, action)=>{
                state.activeUser = action.payload;
            })
});

const {reducer: userReducer} = userSlice;

const userAction = {
    getActiveUser
};

export {
    userReducer,
    userAction
};