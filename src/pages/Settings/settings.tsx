import React from 'react';

import './settings.style.scss';
import {Button} from "../../components";

function Settings() {
    return (
        <div>
            Setting
            Form
            Edit user data
            <Button type={'button'}>Edit Profile(send request)</Button>
        </div>
    );
}

export {Settings};