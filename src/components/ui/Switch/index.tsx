import React, { HTMLAttributes } from "react";
import "./Switch.scss";
interface IProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}
const Switch: React.FC<IProps> = React.memo(
  ({ className = "", id = "", disabled = false, ...rest }) => {
    return (
      <div
        className={`switch ${className} ${disabled ? "disabled" : ""}`}
        {...rest}
      >
        <label htmlFor={id}>
          <input type="checkbox" id={id} />
          <div className="overlay"></div>
          <div className="slide"></div>
        </label>
      </div>
    );
  },
);

export default Switch;
