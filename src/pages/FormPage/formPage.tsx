import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './formPage.style.scss';
import {BookInterface} from "../../interfaces/book.interface";
import {useAppDispatch} from "../../hooks";
import {bookAction} from "../../redux";

const FormPage: FC = () => {
    const {register,handleSubmit, reset} = useForm<BookInterface>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<BookInterface> = async (data) =>{
        await dispatch(bookAction.postBook({book: data}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            Add Book Form
        </form>
    );
}

export {FormPage};