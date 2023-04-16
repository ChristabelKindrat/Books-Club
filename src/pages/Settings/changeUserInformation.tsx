import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {SubmitHandler, useForm} from "react-hook-form";
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
        <form onSubmit={handleSubmit(submit)}>
            <Input
                defaultV={activeUser?.first_name ?? ''}
                type={'text'}
                value={activeUser?.first_name}
                {...register('first_name')}
                // errorText={errors.firstName?.message}
            />
            <Input
                defaultV={activeUser?.last_name ?? ''}
                type={'text'}
                value={activeUser?.last_name}
                {...register('last_name')}
                // errorText={errors.firstName?.message}
            />
            <Input
                defaultV={activeUser?.phone_number ?? ''}
                type={'text'}
                value={activeUser?.phone_number.toString()}
                {...register('phone_number')}
                // errorText={errors.phone?.message}
            />
            <Input
                defaultV={activeUser?.email ?? ''}
                type={'email'}
                value={activeUser?.email}
                {...register('email')}
                // errorText={errors.email?.message}
            />
            <Input
                defaultV={activeUser?.password ?? ''}
                type={'password'}
                value={'Create new Password'}
                {...register('password')}
                // errorText={errors.password?.message}
            />
            <Button type={'submit'}>Save information</Button>
        </form>
    );
}

export {ChangeUserInformation};