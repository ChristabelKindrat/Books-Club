import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";
import {Button} from "../../components";
import {bookService} from "../../services/book.service";
import {book_photo, points} from "../../assets";

const UserBooks = () => {
    const dispatch = useAppDispatch();
    const {activeUser, userBooks} = useAppSelector(state => state.user)
    const [buyersOpen, setBuyersOpen] = useState(false);

    useEffect(() => {
        try {
            dispatch(userAction.getUserBooks(activeUser?.id!));
        } catch (e) {
            console.log(e)
        }
    }, []);

    const approve = async (book_id: number, owner_id: number) => {
        await bookService.approveBook(book_id, owner_id);
        // // @ts-ignore
        // dispatch(bookAction.approveBook(book_id, owner_id));
    }

    return (
        <div>
            {userBooks ? (
                <ul>
                    {userBooks.map((book) =>
                        <li key={book.id} className={'book_give'}>
                            <div className={'book_give__photo_wrap'}>
                                {book.photo_url ? <img src={book.photo_url}
                                                       alt={'photo'}
                                                       className={'book_give__photo'}/> :
                                    <img src={book_photo}
                                         alt={'photo'}
                                         height={'100px'}
                                         className={'book_give__photo'}/>}
                            </div>

                            <div>
                                <div className={'book_give__name'}>{book.name}</div>
                                <div className={'book_give__author'}>{book.author_name}</div>
                                <img src={points} alt={'points'}
                                     onClick={() => {
                                         setBuyersOpen(!buyersOpen)
                                     }} className={'book_give__points'}/>

                                {buyersOpen ? <div>
                                        {book.buyers.map((buyer) =>
                                            <div key={buyer.id}>
                                                <div>
                                                <span>{buyer.first_name} {buyer.last_name}</span>
                                                <span>{buyer.address.city}</span>
                                                </div>
                                                <Button type={'button'} onClick={()=>{approve(book.id!,buyer.id)}}>Approve</Button>
                                            </div>
                                        )}
                                    </div> :
                                    ''}
                            </div>
                        </li>
                    )}
                </ul>
            ) : (
                <div>You don't have any response to give your book, yet!</div>
            )}
        </div>
    );
}

export {UserBooks};