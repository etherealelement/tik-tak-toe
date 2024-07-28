import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    children: React.ReactNode
    className?: string
    color: 'primary' | 'secondary'
}

export const Title: FC<Props> = ({color, children, className, ...props}) => {
    return (
        <h1 className={clsx("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xlt",
            color === "primary" && "text-white",
            color === "secondary" && "text-secondary", className)} {...props}>
            {children}
        </h1>
    );
};

