import React, {FC, PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
import {userService} from "../services/user.service";

const PrivateRoute:FC<PropsWithChildren> = ({ children }) => {

    if(!userService.isUserLogin()){
        return <Navigate to="/login" />;
    }

    return <>{children}</>
}

export default PrivateRoute;