import React, {FC, useEffect} from 'react';

import './books.style.scss';
import {Book} from "../index";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {bookAction} from "../../redux";

const Books: FC = () => {

  const {books} = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(bookAction.getAll())
    },[dispatch])

    return (
        <div>
            Books
            {books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    );
}

export {Books};