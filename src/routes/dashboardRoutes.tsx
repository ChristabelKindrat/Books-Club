import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {BookDetailsPage, BooksPage, AddBookForm, NotFoundPage, Settings} from "../pages";
import {LogIn, SingUp} from "../pages";
import {MainLayout} from "../layouts";
import PrivateRoute from "./privateRoute";

function DashboardRoutes() {

    return (
        <>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'books'}/>}/>
                    <Route path={'books'} element={<BooksPage/>}/>
                    <Route path={'books/:id'} element={<BookDetailsPage/>}/>
                </Route>
                <Route path={'give_book_form'} element={<PrivateRoute><AddBookForm/></PrivateRoute>} />
                <Route path={'settings'} element={<PrivateRoute><Settings/></PrivateRoute>}/>
                <Route path={'login'} element={<LogIn/>}/>
                <Route path={'register'} element={<SingUp/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}
export {DashboardRoutes};