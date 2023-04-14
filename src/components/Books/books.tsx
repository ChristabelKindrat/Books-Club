import React, {FC, useEffect} from 'react';

import './books.style.scss';
import {Book} from "../index";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {bookAction} from "../../redux";
import {useSearchParams} from "react-router-dom";

const Books: FC = () => {

  const {books,prev,next} = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();
  const [query,setQuery] = useSearchParams({pageNumber: "1"});

    useEffect(()=>{
        dispatch(bookAction.getAll(+{pageNumber : query.get("pageNumber")}))
    },[query])

    const prevPage =()=>{
        const page= +!query.get("pageNumber") - 1;
       setQuery({pageNumber: `${page}`});
    }
    const nextPage =()=>{
        const page= +!query.get("pageNumber") + 1;
        setQuery({pageNumber: `${page}`});
    }

    return (
        <div>
            Books
            {books.map(book => <Book book={book} key={book.id}/>)}
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    );
}

export {Books};