import {createSlice} from "@reduxjs/toolkit";

import {BookInterface} from "../../interfaces";
import {getAll, getById, postBook} from "../thunk/books.thunk";

interface BookStateInterface{
    books: BookInterface[],
    bookById: BookInterface | null,
    next: string | null,
    prev: string | null,
    sendBookId: number | null, //change to undefined,
    errors: unknown,
}

const initialBookState: BookStateInterface= {
    books:[],
    bookById: null,
    next: null,
    prev: null,
    sendBookId: null,
    errors: null
};

const BookSlice = createSlice({
    name: "BookSlice",
    initialState: initialBookState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled,(state, action)=>{
                state.bookById = action.payload
            })
            .addCase(getAll.fulfilled,(state, action)=>{
                state.books = action.payload.content
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.errors = action.payload
            })
            .addCase(postBook.fulfilled, (state, action)=>{
                state.books.push(action.payload);
                state.sendBookId = action.payload.id!
            })
});

const {reducer: bookReducer} = BookSlice;

const bookAction ={
    getAll,
    postBook,
    getById
};

export {
    bookReducer,
    bookAction
};