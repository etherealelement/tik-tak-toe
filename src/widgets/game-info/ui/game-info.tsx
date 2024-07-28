import React, {FC} from 'react';
import {User} from "@/entities/user";
import {clsx} from "clsx";
import {Timer} from "@/shared/ui/timer";

type Props = {
    className?: string
}

export const GameInfo: FC<Props> = ({className}) => {
    return (
        <div className={clsx(className, "border-[1px] border-zinc-800 rounded-2xl shadow-md px-8 py-4")}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <User state={"player"} figure={"circle"} className={"w-44"}></User>
                    <span className="h-6 w-px bg-zinc-800"/>
                    <Timer start={true}>0:00</Timer>
                </div>
                <div className="flex items-center gap-3">
                    <Timer start={true}>0:00</Timer>
                    <span className="h-6 w-px bg-zinc-800"/>
                    <User state={"player"} figure={"cross"}></User>
                </div>
            </div>
        </div>
    );
};

