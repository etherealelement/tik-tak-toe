import React, {FC} from 'react';
import {Avatar, AvatarImage, AvatarFallback} from "./avatar/avatar"
import {UserTitle} from "@/shared/ui/user-title";
import {Subtitle} from "@/shared/ui-kit/subtitle/subtitle";
import {clsx} from "clsx"
import {Arrow} from "@/shared/icons/arrow";

type Props = {

}

export const User:FC = () => {
    return (
        <div className={clsx("flex items-center gap-3")}>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex flex-col items-start">
                <UserTitle color={"primary"}>Username</UserTitle>
                <Subtitle color={"primary"}>Рейтинг 1230</Subtitle>
            </span>
            <Arrow color={"primary"}></Arrow>
        </div>
    );
};

