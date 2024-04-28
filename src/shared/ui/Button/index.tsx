import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";
import "./styles.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    size?: "default" | "small" | "icon";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    wide?: boolean;
}

export const Button: FC<Props> = ({
    children,
    icon,
    wide,
    variant = "primary",
    size = "default",
    type = "button",
    className = "",
    iconPosition = "right",
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn("button", className, `button--${variant}`, {
                "button--small": size === "small",
                "button--icon": size === "icon",
                "button--wide": wide,
            })}
            {...props}
        >
            {icon && iconPosition === "left" && (
                <i className="button__icon">{icon}</i>
            )}
            {children && <span className="button__text">{children}</span>}
            {icon && iconPosition === "right" && (
                <i className="button__icon">{icon}</i>
            )}
        </button>
    );
};
