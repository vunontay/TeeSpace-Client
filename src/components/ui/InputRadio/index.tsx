import React, { InputHTMLAttributes } from "react";
import "./index.scss";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string;
    label: string;
}

export const InputRadio = ({ name, value, label, ...rest }: RadioProps) => {
    return (
        <div className="input-radio">
            <input
                className="input-radio__input"
                name={name}
                type="radio"
                id={`${name}-${value}`}
                value={value}
                {...rest}
            />
            <label htmlFor={`${name}-${value}`} className="input-radio__label">
                {label}
            </label>
            <span className="input-radio__span"></span>
        </div>
    );
};
