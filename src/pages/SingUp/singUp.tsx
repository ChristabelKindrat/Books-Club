import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './singUp.style.scss';

import {Button, Input} from "../../components";
import {registerValidator} from "./singUp.validator";
import {UserInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authAction} from "../../redux";
import UploadUserPhoto from "./UploadUserPhoto";

const SingUp: FC = () => {

    const dispatch = useAppDispatch();
    const {errorFromBack} = useAppSelector(state => state.auth)

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<UserInterface>({
        resolver: joiResolver(registerValidator),
        mode: 'onSubmit',
    });

    const submit: SubmitHandler<UserInterface> = async (data) => {
        await dispatch(authAction.register({user: data}));
        reset();
        // if (meta.requestStatus === "fulfilled"){
        //
        // }
    }

    return (
        <div>
            <h3 className={"text_step"}>Step 1</h3>
            <form onSubmit={handleSubmit(submit)} className={'form-wrapper'}>
                <div className={'register_form__info'}>
                    <Input
                        type={'text'}
                        value={'First Name'}
                        {...register('first_name')}
                        fullWidth={true}
                        errorText={errors.first_name?.message}
                    />
                    <Input
                        type={'text'}
                        value={'Last Name'}
                        fullWidth={true}
                        {...register('last_name')}
                        errorText={errors.last_name?.message}
                    />
                    <Input
                        type={'text'}
                        value={'Phone number'}
                        fullWidth={true}
                        {...register('phone_number')}
                        errorText={errors.phone_number?.message}
                    />
                </div>
                <div className={'register_form__address1'}>
                    <Input
                        type={'text'}
                        value={'City'}
                        {...register('address.city')}
                        errorText={errors.address?.city?.message!}
                    />
                    <Input
                        type={'text'}
                        value={'Region'}
                        {...register('address.region')}
                        // errorText={errors.address?.region?.message}
                    />
                    <Input
                        type={'text'}
                        value={'Zip Code'}
                        {...register('address.zip_code')}
                        errorText={errors.address?.zip_code?.message}
                    />
                </div>
                <div className={'register_form__address2'}>
                    <Input
                        type={'text'}
                        value={'Street'}
                        {...register('address.street')}
                        errorText={errors.address?.street?.message}
                    />
                    <Input
                        type={'text'}
                        value={'Build number'}
                        {...register('address.build_number')}
                        errorText={errors.address?.build_number?.message}
                    />
                </div>
                <div className={'register_form__data'}>

            <Input
                type={'email'}
                value={'Email'}
                fullWidth={true}
                {...register('email')}
                errorText={errors.email?.message}
            />
            <Input
                type={'password'}
                value={'Password'}
                fullWidth={true}
                {...register('password')}
                errorText={errors.password?.message}
            />
                </div>
                {errorFromBack && <span>{errorFromBack}</span>}
                <Button type={"submit"} fullWidth={false}>Save Information</Button>
            </form>
            <h3 className={"text_step"}>Step 2</h3>
            <UploadUserPhoto/>
        </div>
    );
}
export {SingUp};