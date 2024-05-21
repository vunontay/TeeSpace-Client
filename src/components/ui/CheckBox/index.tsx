import { HTMLAttributes } from "react";
import "./index.scss";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {}
export const CheckBox = (props: CheckBoxProps) => {
    const { id = "checkbox-1", className, ...rest } = props;

    let checkboxClassName = "checkbox";

    if (className) {
        checkboxClassName += " " + className;
    }

    return (
        <label htmlFor={id} className={checkboxClassName}>
            <input
                type="checkbox"
                name=""
                id={id}
                className="checkbox__input"
                {...rest}
            />
        </label>
    );
};
