import React, {FC, useEffect} from 'react';

import './books.style.scss';
import {Book} from "../index";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {bookAction} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {arrow_left, arrow_right} from "../../assets";

const Books: FC = () => {

  const {books,prev,next} = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();
  const [query,setQuery] = useSearchParams({pageNumber: '0'});

    useEffect(()=>{
        dispatch(bookAction.getAll({pageNumber : +query.get("pageNumber")!}))
    },[query])

    const prevPage =()=>{
        const page= +query.get("pageNumber")! - 1;

        setQuery(page == -1 ? {pageNumber: '0'} : {pageNumber: `${page}`});
    }
    const nextPage =()=>{
        const page= +query.get("pageNumber")! + 1;

        setQuery({pageNumber: `${page}`});

    }

    return (
        <div className={'books_wrap'}>
            <div className={'books_list'}>
                {books.map(book => <Book book={book} key={book.id}/>)}
            </div>
            <div className={'books_wrap__buttons'}>
                {/*<img src={arrow_left} alt={arrow_left} aria-disabled={!prev} onClick={prevPage} width={50}/>*/}
                {/*<img src={arrow_right} alt={arrow_right} aria-disabled={!next} onClick={nextPage} width={50}/>*/}
                <button disabled={!prev} onClick={prevPage} className={'pagination_button'}>Prev page</button>
                <button disabled={!next} onClick={nextPage} className={'pagination_button'}>Next page</button>
            </div>
        </div>
    );
}

export {Books};