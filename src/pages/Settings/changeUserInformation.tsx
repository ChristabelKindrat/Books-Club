import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './settings.style.scss';

import {useAppSelector} from "../../hooks";
import { UserInfoLoginInterface} from "../../interfaces";
import {userService} from "../../services/user.service";
import {Button, Input} from "../../components";


const ChangeUserInformation:FC =() =>{
    const {activeUser} = useAppSelector(state => state.user);

    const {
        register,
        handleSubmit,
        // formState: {errors}
    } = useForm<UserInfoLoginInterface>({
        // resolver: joiResolver(registerValidator),
        mode: 'onSubmit',
    });

    const submit: SubmitHandler<UserInfoLoginInterface> = async (data) => {
        await userService.putInfo(data, activeUser?.id!);
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'form-wrapper'}>
            <div>
            <span>First Name :</span>
            <Input
                defaultV={activeUser?.first_name ?? ''}
                type={'text'}
                value={activeUser?.first_name}
                {...register('first_name')}
                // errorText={errors.firstName?.message}
            />
            </div>
            <div>
            <span>Last Name :</span>
            <Input
                defaultV={activeUser?.last_name ?? ''}
                type={'text'}
                value={activeUser?.last_name}
                {...register('last_name')}
                // errorText={errors.firstName?.message}
            />
           </div>
            <div>
            <span>Phone number :</span>
            <Input
                defaultV={activeUser?.phone_number ?? ''}
                type={'text'}
                value={activeUser?.phone_number.toString()}
                {...register('phone_number')}
                // errorText={errors.phone?.message}
            />
            </div>
            <div>
            <span>Email address :</span>
            <Input
                defaultV={activeUser?.email ?? ''}
                type={'email'}
                value={activeUser?.email}
                {...register('email')}
                // errorText={errors.email?.message}
            />
            </div>
            <div>
            <span>Password :</span>
            <Input
                defaultV={activeUser?.password ?? ''}
                type={'password'}
                value={'Create new Password'}
                {...register('password')}
                // errorText={errors.password?.message}
            />
            </div>
            <Button type={'submit'}>Save information</Button>
        </form>
    );
}

export {ChangeUserInformation};