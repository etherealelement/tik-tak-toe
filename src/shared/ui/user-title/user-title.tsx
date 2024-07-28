import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    children: React.ReactNode;
    className?: string;
    color?: "primary" | "secondary";
}

export const UserTitle: FC<Props> = ({color, className,children, ...props}) => {
    return (
        <h4 className={clsx("scroll-m-20 text-xl font-semibold tracking-tight",
            color === "primary" && "text-white",
            color === "secondary" && "text-blue-950", className )} {...props}>
            {children}
        </h4>
    );
};

