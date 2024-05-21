import React, { InputHTMLAttributes } from "react";
import "./index.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    helperText?: string;
    required?: boolean;
}
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        const {
            className,
            label,
            error,
            helperText = "Missing error message or label",
            required,
            ...rest
        } = props;

        let textfieldClassName = "textfield";
        if (error && helperText !== "") {
            textfieldClassName += ` error`;
        }

        if (className) {
            textfieldClassName += ` ${className}`;
        }

        return (
            <fieldset className={textfieldClassName}>
                <input
                    className="textfield__input"
                    ref={ref}
                    required={Boolean(label) || required}
                    {...rest}
                />
                {label && <p className="textfield__label">{label}</p>}
                {error && helperText && (
                    <small className="textfield__error">{helperText}</small>
                )}
            </fieldset>
        );
    }
);
