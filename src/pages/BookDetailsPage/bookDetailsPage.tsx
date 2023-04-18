import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import './bookDetailsPage.style.scss';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {BookInterface} from "../../interfaces";
import {Button} from "../../components";
import {book_photo, user_reading} from "../../assets";
import {bookAction} from "../../redux";
import {bookService} from "../../services/book.service";

const BookDetailsPage: FC = () => {

    const {id} = useParams<{ id: string }>();
    const {activeUser} = useAppSelector(state => state.user)
    const {state} = useAppLocation<BookInterface>();
    const [book, setBook] = useState<BookInterface | null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

//todo without ts-ignore
    useEffect(() => {
        if (state) {
            setBook(state)
        } else {
            dispatch(bookAction.getById(+id!)).then((data)=>{
                // @ts-ignore
                setBook(data);
            })
        }
    }, [id])

    //todo check if working
    const sentRequest = async () => {
        try {
            await bookService.postUserToBook(book?.id, activeUser?.id);
            navigate('/books');

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {book && (
                <div className={'book_info'}>
                    <div className={'book_info__photo_wrap'}>
                        {book.photo_url ?
                            <img src={book.photo_url}
                                 alt={'photo'}
                                 className={'book_info__photo'}
                            /> :
                            <img src={book_photo}
                                 alt={'photo'}
                                 height={'200px'} className={'book_info__photo'}
                            />}
                    </div>
                    <div className={'book_info__wrap'}>
                        <h3 className={'book_info__name'}>{book.name}</h3>
                        <div className={'book_info__author'}>{book.author_name}</div>
                        <p className={'book_info__description'}> {book.description}</p>
                        <div className={'book_info__tags'}>
                        <div className={'book_info__tag'}>{book.category.name}</div>
                        {book.tags.map((tag)=><div key={tag.id}>{tag.name}</div>)}
                        </div>
                        <div className={'book_info__owner'}>
                        <div>{book?.owner.photo_url ?
                            <img src={book?.owner.photo_url} alt={'user'} className={'book_info__user'}/> :
                            <img src={user_reading} alt={'user'} className={'book_info__user'}/> }
                        </div>
                        <div className={'book_info__city'}>
                           Book location: {book.owner.address.city}
                        </div>
                            <div className={'book_info__button'}>
                                <Button type={'button'} onClick={()=>{sentRequest()}} fullWidth={false}>Take this Book</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export {BookDetailsPage};