import {createSlice} from "@reduxjs/toolkit";
import {BookInterface} from "../../interfaces";
import {getAll, postBook} from "../thunk/books.thunk";

interface BookStateInterface{
    books: BookInterface[],
    next: string | null,
    prev: string | null
}

const initialBookState: BookStateInterface= {
    books:[],
    next: null,
    prev: null,
}

const BookSlice = createSlice({
    name: "BookSlice",
    initialState: initialBookState,
    reducers: {}, //action with state
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.books = action.payload
                // state.books = action.payload.data
                // state.prev = action.payload.prev
                // state.next = action.payload.next
            })
            .addCase(postBook.fulfilled, (state, action)=>{
                state.books.push(action.payload);
            })
});

const {reducer: bookReducer} = BookSlice;

const bookAction ={
    getAll,
    postBook
};

export {
    bookReducer,
    bookAction
};