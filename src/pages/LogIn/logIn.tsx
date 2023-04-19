import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import './logIn.style.scss';

import { Input, Button } from '../../components';
import {logInValidator} from "./logIn.validator";
import {UserLoginInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { useNavigate} from "react-router-dom";
import {authAction, userAction} from "../../redux";
import {userService} from "../../services/user.service";


const initialValues = {
    email: '',
    password: '',
};

const LogIn:FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {activeUser} = useAppSelector(state => state.user)
    const {errorFromBack} = useAppSelector(state => state.auth)

    useEffect(() => {
        if (userService.isUserLogin()) {
            navigate('/books');
        }
    }, [activeUser, navigate]);

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
        try {
            await dispatch(authAction.login({user: data}));
            await dispatch(userAction.getActiveUser());
        }catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
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
            <div className={'form__register'}>
                <span>Don't have account yet?</span>
                <Button type={'button'} fullWidth={false} onClick={()=>{navigate('/register')}}>Register</Button>
            </div>
            {errorFromBack && <span>{errorFromBack}</span>}
            <Button type={'submit'} fullWidth={false} >
                Login
            </Button>
        </form>
    );
}
export {LogIn};