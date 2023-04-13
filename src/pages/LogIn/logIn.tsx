import React, {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import './logIn.style.scss';

import { Input, Button } from '../../components';
import {logInValidator} from "./logIn.validator";
import {UserInterface, UserLoginInterface} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authService} from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {authAction} from "../../redux";

const LogIn:FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLoginInterface>({
        resolver: joiResolver(logInValidator),
        mode: 'onSubmit',
    });

    //todo fix, but what
    const submit: SubmitHandler<UserLoginInterface> = async (data: UserLoginInterface) => {
         await dispatch(authService.login(data))
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type={'email'}
                value={'Email'}
                {...register('email')}
                errorText={errors.email?.message}
            />
            <Input
                type={'password'}
                value={'Password'}
                {...register('password')}
                errorText={errors.password?.message}
            />
            <Button type={'submit'} fullWidth={false}>
                Login
            </Button>
        </form>
    );
}
export {LogIn};