import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookInterface} from "../../interfaces";
import {AxiosError} from "axios";
import {bookService} from "../../services/book.service";

export const getAll = createAsyncThunk<BookInterface[], number>(
    'BookSlice/getAll',
    async (pageNumber,{rejectWithValue}) =>{
        try {
            const {data}=await bookService.getAll(pageNumber);
            return data;
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
)

export const postBook = createAsyncThunk<BookInterface, {book:BookInterface}>(
    'BookSlice/postBook',
    async ({book},{rejectWithValue})=>{
        try {
            const {data} = await bookService.postBook(book);
            return data;
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data);
        }
    }
)