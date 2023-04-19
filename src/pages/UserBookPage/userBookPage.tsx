import React from 'react';

import './userBookPage.scss';
import {UserWantsBooks} from "./userWantsBooks";
import {UserBooks} from "./userBooks";
import {arrow_left} from "../../assets";
import {useNavigate} from "react-router-dom";

const UserBookPage = () => {
    const navigate = useNavigate();

    return (
        <div className={'books_user_wrap'}>
            <span className={'span_wrap'}>
                <img src={arrow_left}
                     alt={'exit'}
                     className={'books_user_wrap__arr'}
                     onClick={()=> navigate('/books')}
                />
                <span className={'span_wrap__text'}>
                    Your Book List :
                </span>
                 <UserBooks/>
            </span>
            <span className={'span_wrap'}>
                <span className={'span_wrap__text'}>Books you want to take : </span>
                <UserWantsBooks/>
            </span>
            </div>
    );
}

export {UserBookPage};