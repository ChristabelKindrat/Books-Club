import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {Button, Input} from "../../components";
import {AddressInterface} from "../../interfaces";
import { useAppSelector} from "../../hooks";
import {userService} from "../../services/user.service";

const ChangeAddress: FC = () => {
    const {activeUser} = useAppSelector(state => state.user);

    const {
        register,
        handleSubmit,
        reset
        // formState: {errors}
    } = useForm<AddressInterface>({
        // resolver: joiResolver(registerValidator),
        mode: 'onSubmit',
    });

    const submit: SubmitHandler<AddressInterface> = async (data) => {
        await userService.putAddress(data, activeUser?.id!);
        reset();
    }

    return (
        <form onChange={handleSubmit(submit)} className={'form-wrapper'}>
            <div>
            <span>City :</span>
            <Input
                defaultV={activeUser?.address.city ?? ''}
                type={'text'}
                value={activeUser?.address.city}
                {...register('city')}
                // errorText={errors.city?.message}
            />
            </div>
            <div>
            <span>Region :</span>
            <Input
                defaultV={activeUser?.address.region ?? ''}
                type={'text'}
                value={activeUser?.address.region}
                {...register('region')}
                // errorText={errors.region?.message}
            />
            </div>
            <div>
                <span>Zip Code : </span>
            <Input
                defaultV={activeUser?.address.zip_code ?? ''}
                type={'text'}
                value={activeUser?.address.zip_code}
                {...register('zip_code')}
                // errorText={errors.zip_code?.message}
            />
            </div>
            <div>
            <span>Street :</span>
            <Input
                defaultV={activeUser?.address.street ?? ''}
                type={'text'}
                value={activeUser?.address.street}
                {...register('street')}
                // errorText={errors.street?.message}
            />
            </div>
            <div>
            <span>Build Number :</span>
            <Input
                defaultV={activeUser?.address.build_number ?? ''}
                type={'text'}
                value={activeUser?.address.build_number}
                {...register('build_number')}
                // errorText={errors.build?.message}
            />
            </div>
            <Button type={'submit'} >Save new address</Button>
        </form>
    );
}
export {ChangeAddress};