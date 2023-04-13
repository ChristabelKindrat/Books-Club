import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookInterface} from "../../interfaces/book.interface";
import {AxiosError} from "axios";
import {bookService} from "../../services/book.service";

export const getAll = createAsyncThunk<BookInterface[], void>(
    'BookSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try {
            const {data}=await bookService.getAll();
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