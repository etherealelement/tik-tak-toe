import React, {FC} from 'react';
import {Avatar, AvatarImage, AvatarFallback} from "./avatar/avatar"
import {UserTitle} from "@/shared/ui/user-title";
import {Subtitle} from "@/shared/ui-kit/subtitle/subtitle";
import {clsx} from "clsx"
import {Arrow} from "@/shared/icons/arrow";
import {Cross} from "@/shared/icons/cross";
import {Circle} from "@/shared/icons/circle";

type Props = {
    state: "header" | "player"
    className?: string;
    figure: "cross" | "circle";
}

export const User:FC<Props> = ({state,figure, className, ...props}) => {
    return (
        <div className={clsx("flex items-center gap-3 relative", className)} {...props}>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex flex-col items-start">
                <UserTitle color={"primary"}>Username</UserTitle>
                <Subtitle color={"primary"}>Рейтинг 1230</Subtitle>
            </span>
            {state === "header" && <Arrow color={"primary"}></Arrow>}
            {state === "player" && <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
                {figure === "cross" ? <Cross /> : <Circle />}
            </div>}
        </div>
    );
};

