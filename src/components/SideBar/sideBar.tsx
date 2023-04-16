import React from 'react';

import './sideBar.style.scss';
import {Button} from "../Button/button";
import {useNavigate} from "react-router-dom";

function SideBar() {
    const navigate = useNavigate();

    return (
        <div>
            This is side bar with settings
            <Button type={'button'} onClick={()=>{navigate('settings')}}>Settings</Button>
        </div>
    );
}

export {SideBar};