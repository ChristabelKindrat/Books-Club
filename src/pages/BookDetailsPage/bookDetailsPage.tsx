import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../../hooks";
import {BookInterface} from "../../interfaces/book.interface";
import {bookService} from "../../services/book.service";

const BookDetailsPage:FC = () =>{
    const {id} = useParams<{id: string}>();
    const {state} =  useAppLocation<BookInterface>();
    const [book, setBook] = useState<BookInterface|null>(null);

    useEffect(()=>{
        if (state){
            setBook(state)
        }else {
            bookService.getById(+id!).then(({data})=>setBook(data));
        }
    },[id])

    return (
        <>
            {book && (
                <div>
                    //todo details on page
                </div>
            )}
        </>
    );
}

export {BookDetailsPage};