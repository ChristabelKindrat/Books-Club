import React, {FormEvent, useState} from 'react';
import {useAppSelector} from "../../hooks";
import {userService} from "../../services/user.service";

const UploadUserPhoto = () => {
    const [selectedFile, setSelectedFile] = useState<Blob | string>('');
    const {activeUser} = useAppSelector(state => state.user);

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append("image", selectedFile);
        try {
            await userService.patchPhotoById(formData, activeUser?.id!);
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

export default UploadUserPhoto;