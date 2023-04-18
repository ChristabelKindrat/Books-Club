import React, {useEffect, useState} from 'react';

import {BookInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";

const UserBooks = () => {
    const dispatch = useAppDispatch();
    const {activeUser, userBooks} = useAppSelector(state => state.user)

    useEffect(()=>{
        try {
            dispatch(userAction.getUserBooks(activeUser?.id!));
        }catch (e) {
            console.log(e)
        }
    },[])

    return (
        <div>
            {userBooks ? (
                <ul>
                    {userBooks.map((book) =>
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
        </div>
    );
}

export {UserBooks};