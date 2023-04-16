import React from 'react';

import './settings.style.scss';
import {Button} from "../../components";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import {ChangeAddress} from "./changeAddress";
import {ChangeUserInformation} from "./changeUserInformation";

function Settings() {
    const navigate = useNavigate();

const deleteToken = async ()=>{
    await authService.deleteTokens();
}

    return (
        <div>
            <Button type={'button'} onClick={()=>{navigate('/books')}}>Go to main</Button>
            <h3>Edit profile information</h3>
            <ChangeUserInformation/>
            <h3>Edit your address</h3>
            <ChangeAddress/>
            <Button type={'button'} onClick={()=>{deleteToken()}}>Exit</Button>
        </div>
    );
}

export {Settings};