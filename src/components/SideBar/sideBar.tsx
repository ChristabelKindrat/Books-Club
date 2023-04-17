import React, {useEffect, useState} from 'react';

import './sideBar.style.scss';
import {Button} from "../Button/button";
import {useNavigate} from "react-router-dom";
import {user_reading} from "../../assets";
import {useAppSelector} from "../../hooks";
import {BookInterface} from "../../interfaces";
import {userService} from "../../services/user.service";

function SideBar() {
    const navigate = useNavigate();
    const {activeUser} = useAppSelector(state => state.user)
    const [userBooks, setUserBooks] = useState<BookInterface[]>([]);
    const [userWantBooks, setUserWantBooks] = useState<BookInterface[]>([]);

    useEffect(() => {
        try {
            // @ts-ignore
            setUserWantBooks(userService.getUserWantBooks(activeUser?.id!));
            // @ts-ignore
            setUserBooks(userService.getUserBooks(activeUser?.id!));
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div className={'side_bar_wrap'}>
            <div>
                <img src={user_reading} alt="photo"/>
                <div>{activeUser?.first_name} {activeUser?.last_name}</div>
                <Button type={'button'} onClick={() => {
                    navigate('settings')
                }}>Edit profile</Button>
            </div>
            <div> My Books</div>
            <div>Wait Response</div>
            {/*{ userBooks ? <ul>*/}
            {/*    {userBooks.map((book) =>*/}
            {/*        <li key={book.id}>*/}
            {/*            <img src={book.photo_url!}/>*/}
            {/*            <div>{book.name}</div>*/}
            {/*            <div>{book.author_name}</div>*/}
            {/*            <div>{book.status}</div>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*    }*/}
            {/*</ul> : ''}*/}
            {/*{ userWantBooks ? <ul>*/}
            {/*    {userWantBooks.map((book) =>*/}
            {/*        <li key={book.id}>*/}
            {/*            <img src={book.photo_url!}/>*/}
            {/*            <div>{book.name}</div>*/}
            {/*            <div>{book.author_name}</div>*/}
            {/*            <div>{book.status}</div>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*    }*/}
            {/*</ul> : ''}*/}
            This is side bar with settings
        </div>
    );
}

export {SideBar};