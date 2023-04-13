import {createSlice} from "@reduxjs/toolkit";
import {BookInterface} from "../../interfaces/book.interface";
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