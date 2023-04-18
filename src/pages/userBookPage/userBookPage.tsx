import React from 'react';

import './userBookPage.scss';
import {UserWantsBooks} from "./userWantsBooks";
import {UserBooks} from "./userBooks";

const UserBookPage = () => {

    return (
        <div className={'books_user_wrap'}>
                <UserBooks/>
                <UserWantsBooks/>
        </div>
    );
}

export {UserBookPage};