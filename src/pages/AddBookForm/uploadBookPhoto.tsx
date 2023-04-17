import React, {FormEvent, useState} from 'react';

import {useAppSelector} from "../../hooks";
import {bookService} from "../../services/book.service";
import {useNavigate} from "react-router-dom";

const UploadPhoto = () => {
    const [selectedFile, setSelectedFile] = useState<Blob | string>('');
    const {sendBookId} = useAppSelector(state => state.books);
    const navigate = useNavigate();

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append("image", selectedFile);
        try {
            await bookService.patchBook( sendBookId!,formData);
            navigate('/books')
        } catch(error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event : any) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileSelect}/>
            <input type="submit" value="Upload File" />
        </form>
    )
};

export default UploadPhoto;