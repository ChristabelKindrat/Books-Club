import React, {FC} from 'react';

import './input.style.scss';

interface InputProps {
    type: string;
    //todo change type any
    errorText?: any;
    className?: string;
    fullWidth?: boolean;
    value?: string;
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
    ({type, value, fullWidth, errorText, className, ...rest}, ref) => {
        return (
            <>
                <input type={type}
                    // fullWidth={fullWidth}
                       placeholder={value}
                       ref={ref}
                       {...rest}
                />
                {errorText && <span className="">{errorText}</span>}
            </>
        );
    })

export {Input};