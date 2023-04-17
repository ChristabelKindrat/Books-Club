import React, {FormEvent, useState} from 'react';
import {useAppSelector} from "../../hooks";
import {userService} from "../../services/user.service";
import {useNavigate} from "react-router-dom";
import './singUp.style.scss';
import {Button} from "../../components";

const UploadUserPhoto = () => {
    const [selectedFile, setSelectedFile] = useState<Blob | string>('');
    const {registeredUser} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append("image", selectedFile);
        try {
            console.log(registeredUser?.id);
            await userService.patchPhotoById(formData, registeredUser?.id!);
            navigate('/login');
        } catch(error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event : any) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit} className={'form-wrapper form-uploader'}>
            <label className={'file_uploader'}>
            <input type="file" onChange={handleFileSelect} />
                Click to add file!
            </label>

            <Button type={'submit'}>Save File</Button>
        </form>
    )
};

export default UploadUserPhoto;