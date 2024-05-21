"use client";
import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import "./index.scss";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: "default" | "secondary" | "outline" | "black";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
    ({
        children,
        variant = "default",
        size = "medium",
        className = "",
        loading = false,
        disabled = false,
        ...rest
    }) => {
        const { pending } = useFormStatus();
        return (
            <button
                {...rest}
                className={`btn btn--${variant} btn--${size} ${className}`}
                disabled={pending || loading || disabled}
            >
                {pending || loading ? (
                    <Icon
                        className={"icon__loading"}
                        icon="eos-icons:loading"
                    />
                ) : (
                    children
                )}
            </button>
        );
    }
);
