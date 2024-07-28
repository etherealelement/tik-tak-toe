import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    className?: string;
    children: React.ReactNode;
}

export const Cell: FC<Props> = ({className, children, ...props}) => {
    return (
        <button className={clsx("border-[1px] border-zinc-800 -ml-px -mt-px flex items-center justify-center", className)}>
            {children}
        </button>
    );
};
