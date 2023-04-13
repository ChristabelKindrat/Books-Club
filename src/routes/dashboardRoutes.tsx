import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {BookDetailsPage, BooksPage, FormPage, NotFoundPage, Settings} from "../pages";
import {LogIn, SingUp} from "../pages";
import {MainLayout} from "../layouts";

function DashboardRoutes() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'books'}/>}/>
                    <Route path={'books'} element={<BooksPage/>}/>
                    <Route path={':id'} element={<BookDetailsPage/>}/>
                    <Route path={'form'} element={<FormPage/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                </Route>
                <Route path={'login'} element={<LogIn/>}/>
                <Route path={'register'} element={<SingUp/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export {DashboardRoutes};