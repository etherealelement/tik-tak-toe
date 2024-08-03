import React, {FC} from 'react';
import {clsx} from "clsx";

type Props = {
    className?: string;
    children: React.ReactNode;
}

export const GameFieldLayout: FC<Props> = ({className, children, ...props}) => {
    return (
        <div className={clsx("rounded-2xl border-[1px] border-zinc-800 shadow-md px-8 py-4", className)} {...props}>
            {children}
        </div>
    );
};
