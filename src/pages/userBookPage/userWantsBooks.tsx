import React, {useEffect, useState} from 'react';

import {BookInterface} from "../../interfaces";
import {userService} from "../../services/user.service";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";


const UserWantsBooks = () => {
    const dispatch = useAppDispatch();
    const { userWantBooks} = useAppSelector(state => state.user)
    const { sendBookId} = useAppSelector(state => state.books)

    //todo user want book what id
    useEffect(()=>{
        dispatch(userAction.getUserWantBooks(sendBookId!));
    },[])

    return (
        <div>
            <ul>
                {userWantBooks ? (
                    <ul>
                        {userWantBooks.map((book) =>
                            <li key={book.id}>
                                <img src={book.photo_url!}/>
                                <div>{book.name}</div>
                                <div>{book.author_name}</div>
                                <div>{book.status}</div>
                            </li>
                        )}
                    </ul>
                ) : (
                    <div>Loading...</div>
                )}
            </ul>
        </div>
    );
}

export {UserWantsBooks};