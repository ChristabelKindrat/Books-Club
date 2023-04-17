import React from 'react';

import './button.style.scss';

interface Props {
    children?: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler;
    fullWidth?: boolean;
}

const Button: React.FC<Props> = ({children, type, onClick,fullWidth, ...arg}) => {
    return (
        <button type={type || 'button'}
                className={"main_button"}
                style={fullWidth ? {width: '100%'} : {width: 'auto'}}
                onClick={onClick}
                {...arg}
        >
                {children}
        </button>
    );
}

export {Button};