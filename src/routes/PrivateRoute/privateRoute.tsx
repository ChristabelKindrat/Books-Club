import React, {FC, PropsWithChildren} from 'react';

import {Navigate} from 'react-router-dom';
import {userService} from "../../services/user.service";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userAction} from "../../redux";

const PrivateRoute:FC<PropsWithChildren> = ({ children }) => {
const {activeUser} = useAppSelector(state => state.user);
const dispatch = useAppDispatch();

  if(!userService.isUserLogin()){
        return <Navigate to="/login" />;
    }else if(!activeUser?.id){
      dispatch(userAction.getActiveUser());
  }

    return <>{children}</>
}

export default PrivateRoute;