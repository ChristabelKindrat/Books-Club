import React, {FC, ReactNode} from 'react';

import './book.style.scss';
import {book_photo} from '../../assets';
import {BookInterface} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    book: BookInterface,
    children?: ReactNode
}

const Book: FC<IProps> = ({book}) => {
    const {id, photo_url, name, author_name} = book;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`${id}`, {state: book})} className={'book_wrap'}>
            {photo_url ? <img src={photo_url}
                              alt={'photo'}
                              className={'book_wrap__photo'}/> :
                         <img src={book_photo}
                              alt={'photo'}
                              height={'200px'}
                              className={'book_wrap__photo'}/>}

            <div className={'books_wrap__info'}>
                <h3 className={'book_wrap__name'}>{name}</h3>
                <div className={'book_wrap__author'} >{author_name}</div>
            </div>
        </div>
    );
};

export {Book};