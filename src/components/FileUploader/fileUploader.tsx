import React, {FC} from 'react';

import {Input} from "../Input/input";
import {Button} from "../Button/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {PhotoInterface} from "../../interfaces";

const FileUploader:FC = () => {

    const {handleSubmit, register} = useForm<PhotoInterface>();

    const submit: SubmitHandler<PhotoInterface> = async (data) => {
        // await dispatch(authAction.login({user: data}))
    };

    //todo validation for photo input
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <Input type={'file'} value={"Upload photo"} {...register('photo_url')}/>
                <Button type={'submit'}>Sent File</Button>
            </form>
        </div>
    );
}

export {FileUploader};