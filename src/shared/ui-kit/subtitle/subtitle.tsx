import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    children: React.ReactNode,
    className?: string
    color?: "primary" | "secondary"
}

export const Subtitle: FC<Props> = ({color, className, children, ...props}) => {
    return (
        <p className={clsx("leading-7",
            color === "primary" && "text-white",
            color === "secondary" && "text-secondary", className)} {...props}>
            {children}
        </p>
    );
};

