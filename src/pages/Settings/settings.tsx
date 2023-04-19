import React from 'react';

import './settings.style.scss';

import {Button} from "../../components";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import {ChangeAddress} from "./changeAddress";
import {ChangeUserInformation} from "./changeUserInformation";
import {arrow_left} from "../../assets";

function Settings() {
    const navigate = useNavigate();

const deleteToken = async ()=>{
    await authService.deleteTokens();
}

    return (
        <div className={'setting_wrap'}>
            <img src={arrow_left}
                 alt={'go back'}
                 onClick={()=>{navigate('/books')}}
                 className={'setting_wrap__back'}/>
            <h3 className={'setting_wrap__header_txt'}>Edit profile information</h3>
            <ChangeUserInformation/>
            <h3 className={'setting_wrap__header_txt'}>Edit your address</h3>
            <ChangeAddress/>
            <div className={'setting_wrap__exit'}>
                <span>Exit from your profile:</span>
                <Button type={'button'}
                        onClick={()=>deleteToken()}
                        fullWidth={false}>
                    End your session
                </Button>
                </div>
        </div>
    );
}

export {Settings};