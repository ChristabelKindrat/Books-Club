import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TextField, AutocompleteRenderInputParams} from "@mui/material";

import './addBookForm.scss';

import {BookInterface, TagsInterface} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Button, Input} from "../../components";
import {MultipleSelectWithBadges} from "../../components/Input/input.whith.select";
import UploadBookPhoto from "./uploadBookPhoto";
import {bookAction} from "../../redux";
import {arrow_right, check, minus} from "../../assets";

const tags = [
    {id: 1, name: 'Best Book2021'},
    {id: 2, name: 'Best Book2006'},
    {id: 3, name: 'Best Book2012'},
    {id: 4, name: 'Best Book2014'},
    {id: 5, name: 'Best Book2020'}
]

const categoryes = [
    {
        id: 1,
        name: "Fiction"
    },
    {
        id: 2,
        name: "Mystery & Thriller"
    },
    {
        id: 3,
        name: "Romance"
    },
    {
        id: 4,
        name: "Fantasy"
    },
    {
        id: 5,
        name: "Science Fiction"
    },
    {
        id: 6,
        name: "Historical Fiction"
    },
    {
        id: 7,
        name: "Biography & Memoir"
    },
    {
        id: 8,
        name: "Nonfiction"
    },
    {
        id: 9,
        name: "Business"
    },
    {
        id: 10,
        "name": "History"
    },
    {
        id: 11,
        name: "Travel"
    },
    {
        id: 12,
        name: "Cookbooks, Food & Wine"
    },
    {
        id: 13,
        name: "Humor"
    },
    {
        id: 14,
        name: "Art"
    },
    {
        id: 15,
        name: "Science"
    },
    {
        id: 16,
        name: "Sports & Outdoors"
    },
    {
        id: 17,
        name: "Law"
    },
    {
        id: 18,
        name: "Engineering & Transportation"
    },
    {
        id: 19,
        name: "Music"
    },
    {
        id: 20,
        name: "Philosophy"
    },
    {
        id: 21,
        name: "Architecture"
    },
    {
        id: 22,
        name: "Medical Books"
    },
    {
        id: 23,
        name: "Sociology"
    },
    {
        id: 24,
        name: "Environmental Science"
    },
    {
        id: 25,
        name: "Linguistics"
    }
]


const AddBookForm: FC = () => {
    const dispatch = useAppDispatch();
    const {activeUser} = useAppSelector(state => state.user);
    const {sendBookId} = useAppSelector(state => state.books);
    const [chosenTags, setChosenTags,] = useState<TagsInterface[]>([]);

    const {
        register,
        handleSubmit,
    } = useForm<BookInterface>();
    const [value, setValue] = useState('option1');

    const tagArray = [
        {id: 1, name: 'Best Book2021'},
        {id: 2, name: 'Best Book2006'},
        {id: 3, name: 'Best Book2012'},
        {id: 4, name: 'Best Book2014'},
        {id: 5, name: 'Best Book2020'}
    ];

    const handleMembersChange = (e: React.SyntheticEvent, members: string[]) => {
        console.log(members);
        setChosenTags(tagArray.filter(tag => members.includes(tag.name)).map(item => ({id: item.id})));
    }

    const submit: SubmitHandler<BookInterface> = async (data) => {
        data.owner_id = activeUser?.id;
        data.tags = chosenTags;
        // @ts-ignore
        data.category_id = parseInt(data.category_id)
        await dispatch(bookAction.postBook({book: data}));
    }

    return (
        <div>
            <div className={'text_book_form'}> Give your book into good hands! </div>
            <div className={'give_book_wrap'}>
                <div className={'give_book_wrap__step1'}>
                    <h3>Step 1</h3>
                    <img src={arrow_right} alt={'arrow'} className={'arrow'}/>
                    <form onSubmit={handleSubmit(submit)} className={'form-wrapper-book'}>
                        <Input type={'text'} value={'Name'} {...register('name')}/>
                        <Input type={'description'} value={'Description'} {...register('description')}/>
                        <Input type={'author_name'} value={'Author/s'} {...register('author_name')}/>
                        <div>
                            <select id="selectInput" className={'select_wrap'} {...register('category_id')}>
                                {categoryes.map((category) =>
                                    <option key={category.id} value={category.id}>{category.name}</option>)}
                            </select>
                        </div>
                        <MultipleSelectWithBadges
                            options={tagArray.map((tag) => tag.name)}
                            handleChange={handleMembersChange}
                            label={'Select Members'}
                            // inputError={!!errors?.users}
                            // inputTextError={errors.users}
                            renderInput={(params: AutocompleteRenderInputParams) => (
                                <TextField {...params} />
                            )}
                        />
                        <Button type={'submit'}>Add main information</Button>
                    </form>
                </div>
                <div className={'give_book_wrap__step1'}>
                    <h3>Step 2</h3>
                    <img src={arrow_right} alt={'arrow'} className={'arrow'}/>
                    <UploadBookPhoto/>
                    <img src={minus} alt={'minus'} className={'arrow'}/>
                    <img src={check} alt={'check'} className={'arrow'}/>
                </div>
            </div>
        </div>
    );
}

export {AddBookForm};