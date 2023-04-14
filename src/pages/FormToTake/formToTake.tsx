import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {BookInterface} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {bookAction} from "../../redux";

const FormToTake: FC = () => {
    const {register,handleSubmit, reset} = useForm<BookInterface>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<BookInterface> = async (data) =>{
        await dispatch(bookAction.postBook({book: data}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            Add Form To Take book
        </form>
    );
}

export {FormToTake};