import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './header.style.scss';

import {Button} from "../Button/button";
import {userService} from "../../services/user.service";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {bar, book, search, user_reading} from "../../assets";
import {bookAction} from "../../redux";

const Header: FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.auth)
    const {activeUser} = useAppSelector(state => state.user)

    const [userIsLogin, setUserIsLogin] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userService.isUserLogin()) {
            setUserIsLogin(true)
        }
    }, [isAuth, navigate, userIsLogin]);

    return (
        <div className={'header_wrapper'}>

            <Button type={'button'} onClick={() => {
                navigate('give_book_form')
            }}>Give Book</Button>


            {userIsLogin ?
                <div className={'user_header'}>
                    <img src={book}
                         alt={'book_info'}
                         className={'user_header__books'}
                         onClick={() => {
                             navigate('/user_book')
                         }}
                    />
                    <div className={'user_header__info'}
                         onClick={() => {
                             navigate('/settings')
                         }}
                    >
                        <div className={'user_header__info_name'}>{activeUser? activeUser?.first_name : "User Name"}</div>
                        {isAuth ?
                            <img src={activeUser?.photo_url!} alt={"user_photo"} className={'user_header__photo'}/>
                            :
                            <img src={user_reading} alt={"user_photo"} className={'user_header__photo'}/>}
                    </div>
                </div>
                :
                <Button type={'button'} onClick={() => {
                    navigate('/login')
                }}>Your Profile</Button>}
        </div>
    );
}

export {Header};