import React, {FC} from 'react';
import {Cell} from "@/shared/ui/cell";
import {Circle} from "@/shared/icons/circle";
import {clsx} from "clsx";

type Props = {
    className?: string;
    children: React.ReactNode
}

export const GameGrid: FC<Props> = ({className,children, ...props}) => {
    return (
        <div className={clsx("mt-6 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px", className)} {...props}>
            {children}
        </div>
    );
};
