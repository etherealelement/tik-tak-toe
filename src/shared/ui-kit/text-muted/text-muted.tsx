import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    className?: string;
    children: React.ReactNode;
}

export const TextMuted: FC<Props> = ({children, className, ...props}) => {
    return (
        <p className={clsx("text-sm text-zinc-400", className)} {...props}>{children}</p>
    );
};

