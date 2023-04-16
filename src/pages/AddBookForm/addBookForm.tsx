import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    Select,
    FormControl, TextField, AutocompleteRenderInputParams
} from "@mui/material";

import './addBookForm.scss';
import {BookInterface, CategoryInterface, TagsInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Button, Input} from "../../components";
import {useNavigate} from "react-router-dom";
import {MultipleSelectWithBadges} from "../../components/Input/input.whith.select";
import UploadBookPhoto from "./uploadBookPhoto";


const AddBookForm: FC = () => {
    const dispatch = useAppDispatch();
    const {activeUser} = useAppSelector(state => state.user);
    const {sendBookId} = useAppSelector(state => state.books);
    // const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [tags, setTags] = useState<TagsInterface[]>([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm<BookInterface>();
    const [value, setValue] = useState('option1');

    const handleChange = (value: string) => setValue(value);


        // bookService.getCategories().then((data) => setCategories(data.data));
        // bookService.getTags().then((data) => {setTags(data.data)});


    const submit: SubmitHandler<BookInterface> = async (data) => {
        data.owner_id = activeUser?.id;
        console.log(data)

        // await dispatch(bookAction.postBook({book: data}));
    }
    const uploadPhoto: SubmitHandler<BookInterface> = async (data) => {

        // await bookService.patchBook(sendBookId!,data);
    }
  const  categories = [{id: 1, name: "one"}, {id: 2, name:"two"}]
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];


    // function handleChange(event: any) {
    //     console.log(event.target.value);
    // }
    const [selectedNames, setSelectedNames] = useState([]);
    const names = [
        {id: 1, name:'sc'},{id: 2, name:'dcsd'},{id: 3, name:'scdc'},{id: 4, name:'cscd'},
    ];
    const [allUsers, setAllUsers] = useState<Array<{ email: string; id: string }>>([]);
    const handleMembersChange = (e: React.SyntheticEvent, members: string[]) => {
        console.log(members);
        //     setValues({
    //         ...values,
    //         users: allUsers
    //             .filter((user) => members.includes(user.email))
    //             .map((user) => user.id),
    //     });
    //     delete errors['users'];
    };


    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <Input type={'text'} value={'Name'} {...register('name')}/>
                <Input type={'description'} value={'Description'} {...register('description')}/>
                <Input type={'author_name'} value={'Author/s'} {...register('author_name')}/>
                <div>
                    <select id="selectInput" {...register('category_id')}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                {/*<input type="checkbox" id="checkbox1"  value={'id:1'} {...register("tags")} />*/}
                {/*<input type="checkbox" id="checkbox2"  value={'id:2'}{...register("tags")} />*/}
                {/*<input type="checkbox" id="checkbox3"  value={'id:3'}{...register("tags")} />*/}

                {/*<FormControl sx={{ m: 1, width: 500 }}>*/}
                {/*    <InputLabel>Multiple Select</InputLabel>*/}
                {/*    <Select*/}
                {/*        multiple*/}
                {/*        value={selectedNames}*/}
                {/*        onChange={(e: any) => setSelectedNames(e.target.value)}*/}
                {/*        input={<OutlinedInput label="Multiple Select" />}*/}
                {/*    >*/}
                {/*        {names.map((name) => (*/}
                {/*            <MenuItem key={name.id} value={name.id}>*/}
                {/*                {name.name}*/}
                {/*            </MenuItem>*/}
                {/*        ))}*/}
                {/*    </Select>*/}
                {/*</FormControl>*/}
                <MultipleSelectWithBadges
                    options={names.map((user) => user.name)}
                    handleChange={handleMembersChange }
                    label={'Select Members'}
                    // inputError={!!errors?.users}
                    // inputTextError={errors.users}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                        <TextField {...params} />
                    )}
                />





                <Button type={'submit'}>Add main information</Button>
            </form>
            <form onSubmit={handleSubmit(uploadPhoto)}>
                <Input type={'file'} {...register('photo_url')}/>
                <Button type={'submit'}>Upload Photo</Button>
            </form>
            <h3>Step 2</h3>
            <UploadBookPhoto/>
        </>
    );
}

export {AddBookForm};