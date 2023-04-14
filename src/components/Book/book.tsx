import React, {FC, ReactNode} from 'react';

import './book.style.scss';
import {BookInterface} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps{
    book: BookInterface,
    children?: ReactNode
}

const Book:FC<IProps> = ({book}) => {
    const {id }= book;

    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`${id}`, {state: book})}>
            Book, not one :D
        </div>
    );
};

export {Book};