import React, {FC} from 'react';

import './input.style.scss';

export interface InputProps {
    type: string;
    errorText?: string;
    className?: string;
    errorFromBack?: string;
    fullWidth?: boolean;
    value?: string;
    defaultV?: string | number | null;
    defaultText?: string | number,
    onChange?: React.ChangeEventHandler
}

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
    ({type, onChange, errorFromBack, defaultV, value, defaultText, fullWidth, errorText, className, ...rest}, ref) => {
        return (
            <>
                <input type={type}
                       style={fullWidth ? {width: '100%'} : {width: 'auto'}}
                       defaultValue={defaultV!}
                       placeholder={value}
                       value={defaultText}
                       ref={ref}
                       onChange={onChange}
                       className={'mane_input'}
                       {...rest}
                />
                {errorText && <span className="">{errorText}</span> || errorFromBack &&
                    <span className="">{errorText}</span>}
            </>
        );
    })

export {Input};