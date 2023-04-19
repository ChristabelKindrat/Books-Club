import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";
import {book_photo} from "../../assets";


const UserWantsBooks = () => {
    const dispatch = useAppDispatch();
    const { userWantBooks, activeUser} = useAppSelector(state => state.user)

    useEffect(()=>{
        dispatch(userAction.getUserWantBooks(activeUser?.id!));
    },[])

    return (
        <div className={'scroll_bar'}>
                {userWantBooks ? (
                    <ul className={'list_user_books'}>
                        {userWantBooks.map((book) =>
                            <li key={book.id}
                                className={'book_give '}
                            >
                                <div className={'book_give__photo_wrap'}>
                                    {book.photo_url ?
                                        <div className={'book_give__photo'}>
                                            <img src={book.photo_url}
                                                 alt={'photo'}

                                            />
                                        </div> :
                                        <div className={'book_give__photo'}>
                                            <img src={book_photo}
                                                 alt={'photo'}
                                                 height={'100px'}
                                                 className={'book_give__photo'}
                                            />
                                        </div>}
                                </div>

                                <div className={'book_give__info_name'}>
                                <div className={'book_give__name'}>{book.name}</div>
                                <div className={'book_give__author'}>{book.author_name}</div>
                                </div>

                            </li>
                        )}
                    </ul>
                ) : (
                    <div>Are you sure you don't want to take the book?</div>
                )}
        </div>
    );
}

export {UserWantsBooks};