import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import './logIn.style.scss';

import { Input, Button } from '../../components';
import {logInValidator} from "./logIn.validator";
import {UserLoginInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { useNavigate} from "react-router-dom";
import {authAction} from "../../redux";
import {userService} from "../../services/user.service";

const initialValues = {
    email: '',
    password: '',
};

const LogIn:FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.auth)
//todo user for deps
    useEffect(() => {
        if (userService.isUserLogin()) {
            navigate('/books');
        }
    }, [isAuth, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLoginInterface>({
        defaultValues: initialValues,
        resolver: joiResolver(logInValidator),
        mode: 'onSubmit',
    });

    const submit: SubmitHandler<UserLoginInterface> = async (data) => {
       await dispatch(authAction.login({user: data}))
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
            <div>
                Don't have account yet?
                <Button type={'button'} onClick={()=>{navigate('/register')}}>Register</Button>
            </div>
            <Button type={'submit'} fullWidth={false}>
                Login
            </Button>
        </form>
    );
}
export {LogIn};