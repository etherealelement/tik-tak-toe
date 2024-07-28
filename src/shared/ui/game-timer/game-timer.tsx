import React, {FC} from 'react';
import {Timer} from "@/shared/icons/timer";
import {clsx} from "clsx";
import {TextMuted} from "@/shared/ui-kit/text-muted";

type Props = {
    children: React.ReactNode
    classNames?: string;
}

export const GameTimer: FC<Props> = ({children, classNames, ...props}) => {
    return (
        <div className={clsx("flex items-center gap-2", classNames)} {...props}>
            <Timer></Timer>
            <TextMuted>{children} мин на ход</TextMuted>
        </div>
    );
};

