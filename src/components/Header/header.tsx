import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './header.style.scss';

import {Button} from "../Button/button";
import {userService} from "../../services/user.service";
import {useAppSelector} from "../../hooks";
import {Settings} from "../../pages";

const Header:FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.auth)

   const [userIsLogin, setUserIsLogin] = useState(false);

    useEffect(() => {
        if (userService.isUserLogin()) {
            setUserIsLogin(true)
        }
    }, [isAuth, navigate,userIsLogin]);

    return (
        <div>
            Header
            <Button type={'button'} onClick={()=>{navigate('give_book_form')}}>Give Book</Button>

            {userIsLogin ? <Settings/> : <Button type={'button'} onClick={()=>{navigate('/login')}}>Your Profile</Button>}
        </div>
    );
}

export {Header};