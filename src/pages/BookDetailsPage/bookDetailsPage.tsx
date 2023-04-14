import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {useAppLocation} from "../../hooks";
import {BookInterface} from "../../interfaces";
import {bookService} from "../../services/book.service";
import {Button} from "../../components";

const BookDetailsPage:FC = () =>{
    const {id} = useParams<{id: string}>();
    const {state} =  useAppLocation<BookInterface>();
    const [book, setBook] = useState<BookInterface|null>(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if (state){
            setBook(state)
        }else {
            bookService.getById(+id!).then(({data})=>setBook(data));
        }
    },[id])

    return (
        <>
            Book
            {book && (
                <div>
                    //todo details on page
                </div>
            )}
            <Button type={'button'} onClick={()=>{navigate('take_book_form')}}>Take this Book</Button>
        </>
    );
}

export {BookDetailsPage};