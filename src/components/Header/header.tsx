import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './header.style.scss';

import {Button} from "../Button/button";
import {userService} from "../../services/user.service";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SideBar} from "../SideBar/sideBar";
import {search} from "../../assets";

const Header:FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.auth)

   const [userIsLogin, setUserIsLogin] = useState(false);
    const [term,setTerm]=useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userService.isUserLogin()) {
            setUserIsLogin(true)
        }
    }, [isAuth, navigate,userIsLogin]);

    const submitHandler =(e: any)=>{
        e.preventDefault();
        // dispatch(bookAction.getAll(1));
        setTerm('');
    }

    return (
        <div>
            <div>
                <form onSubmit={submitHandler} className={'input_container'} >
                    <input type={'text'} value = {term} placeholder={"Books titles"} onChange={(e)=>setTerm(e.target.value)} className={"search_input"}/>
                    <img src={search} alt={'search'}/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/*<button type={'submit'}></button>*/}
                </form>
            </div>
            Header

            <Button type={'button'} onClick={()=>{navigate('give_book_form')}}>Give Book</Button>

            {userIsLogin ? <SideBar/> : <Button type={'button'} onClick={()=>{navigate('/login')}}>Your Profile</Button>}
        </div>
    );
}

export {Header};