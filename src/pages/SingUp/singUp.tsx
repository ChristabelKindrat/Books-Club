import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './singUp.style.scss';

import {Button, Input} from "../../components";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "./singUp.validator";
import {UserInterface} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authAction} from "../../redux";

const SingUp: FC = () => {
    const dispatch = useAppDispatch();

//todo what is response?
    const submit: SubmitHandler<UserInterface> = async (data) => {
        await dispatch(authAction.register({user: data}));
    }

//todo why not working with validation
    const {
        register,
        handleSubmit,
        // formState: {errors}
    } = useForm<UserInterface>({
        // resolver: joiResolver(registerValidator),
        mode: 'onSubmit',
    });

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type={'text'}
                value={'First Name'}
                {...register('first_name')}
                // errorText={errors.firstName?.message}
            />
            <Input
                type={'text'}
                value={'Last Name'}
                {...register('last_name')}
                // errorText={errors.firstName?.message}
            />
            {/*<Input*/}
            {/*    type={'file'}*/}
            {/*    value={'Photo'}*/}
            {/*    {...register('photo')}*/}
            {/*    // errorText={errors.firstName?.message}*/}
            {/*/>*/}
            <Input
                type={'text'}
                value={'City'}
                {...register('address.city')}
                // errorText={errors.city?.message}
            />
            <Input
                type={'text'}
                value={'Region'}
                {...register('address.region')}
                // errorText={errors.region?.message}
            />
            <Input
                type={'text'}
                value={'Zip Code'}
                {...register('address.zip_code')}
                // errorText={errors.zip_code?.message}
            />
            <Input
                type={'text'}
                value={'Street'}
                {...register('address.street')}
                // errorText={errors.street?.message}
            />
            <Input
                type={'text'}
                value={'Build number'}
                {...register('address.build_number')}
                // errorText={errors.build?.message}
            />
            <Input
                type={'text'}
                value={'Phone number'}
                {...register('phone_number')}
                // errorText={errors.phone?.message}
            />

            <Input
                type={'email'}
                value={'Email'}
                {...register('email')}
                // errorText={errors.email?.message}
            />
            <Input
                type={'password'}
                value={'Password'}
                {...register('password')}
                // errorText={errors.password?.message}
            />
            <Button type={"submit"}>Save</Button>
        </form>
    );
}
export {SingUp};