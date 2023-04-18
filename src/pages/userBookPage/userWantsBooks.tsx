import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";


const UserWantsBooks = () => {
    const dispatch = useAppDispatch();
    const { userWantBooks, activeUser} = useAppSelector(state => state.user)

    useEffect(()=>{
        dispatch(userAction.getUserWantBooks(activeUser?.id!));
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