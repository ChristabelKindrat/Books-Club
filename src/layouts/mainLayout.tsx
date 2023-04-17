import React from 'react';

import './mainLayout.style.scss';
import {Header} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={'main_layout_wrap'}>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};