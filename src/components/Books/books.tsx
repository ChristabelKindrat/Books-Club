import React, {FC, useEffect, useState} from 'react';

import './books.style.scss';
import {Book} from "../index";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {bookAction} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {search} from "../../assets";

const Books: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const {books,prev,next} = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();
  const [query,setQuery] = useSearchParams({pageNumber: '0'});

    useEffect(()=>{
        dispatch(bookAction.getAll({pageNumber : +query.get("pageNumber")!}))
    },[query]);

    const prevPage =()=>{
        const page= +query.get("pageNumber")! - 1;

        setQuery(page === -1 ? {pageNumber: '0'} : {pageNumber: `${page}`});
    }
    const nextPage =()=>{
        const page= +query.get("pageNumber")! + 1;

        setQuery({pageNumber: `${page}`});
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(bookAction.getAllFilter({searchValue}));
        setSearchValue('');
    }

    return (
        <div className={'books_wrap'}>
            <form onSubmit={submitHandler} className={'input_container'}>
                <input type={'text'} value={searchValue} placeholder={"Books titles"}
                       onChange={(e) => setSearchValue(e.target.value)} className={"input_container__search_input"}/>
                <img src={search} alt={'search'} className={'input_container__search_svg'}/>
            </form>
            <div className={'books_list'}>
                {books.map(book => <Book book={book} key={book.id}/>)}
            </div>
            <div className={'books_wrap__buttons'}>
                <button disabled={!prev} onClick={prevPage} className={'pagination_button'}>Prev page</button>
                <button disabled={!next} onClick={nextPage} className={'pagination_button'}>Next page</button>
            </div>
        </div>
    );
}

export {Books};