import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {BookInterface} from "../../interfaces";
import {Button} from "../../components";
import {book_photo} from "../../assets";
import {bookAction} from "../../redux";
import {bookService} from "../../services/book.service";

const BookDetailsPage:FC = () =>{

    const {id} = useParams<{id: string}>();
    const {activeUser} = useAppSelector(state => state.user)
    const {state} =  useAppLocation<BookInterface>();
    const [book, setBook] = useState<BookInterface | null>(null);
    const dispatch = useAppDispatch();

//todo without ts-ignore
    useEffect(()=>{
        if (state){
            setBook(state)
        }else {
          dispatch(bookAction.getById(+id!)).then((data)=>{
              // @ts-ignore
              setBook<BookInterface>(data.payload)})
        }
    },[id])

    const sentRequest = async ()=>{
        try {
          await  bookService.postUserToBook(book?.id,activeUser?.id);
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {book && (
                <div>
                    {book.photo_url ? <img src={book.photo_url} alt={'photo'}/> : <img src={book_photo} alt={'photo'} height={'200px'}/>}
                    <h3>{book.name}</h3>
                    <div>{book.author_name}</div>
                    <p> {book.description}</p>
                    <div>{book.category.name}</div>
                    {book.tags.map((tag)=><div key={tag.id}>{tag.name}</div>)}
                </div>
            )}
            <div>{book?.owner.photo_url}</div>
            <Button type={'button'} onClick={()=>{sentRequest()}}>Take this Book</Button>
        </>
    );
}

export {BookDetailsPage};