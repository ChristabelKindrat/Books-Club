import React, {FC, ReactNode} from 'react';

import './book.style.scss';
import {book_photo} from '../../assets';
import {BookInterface} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps{
    book: BookInterface,
    children?: ReactNode
}

const Book:FC<IProps> = ({book}) => {
    const {id,photo_url,name,author_name }= book;

    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`${id}`, {state: book})}>
            {photo_url ? <img src={photo_url} alt={'photo'}/> : <img src={book_photo} alt={'photo'} height={'200px'}/>}
            <h3>{name}</h3>
            <div>{author_name}</div>
        </div>
    );
};

export {Book};