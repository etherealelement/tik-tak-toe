import React, {FC} from 'react';
import {Avatar, AvatarImage, AvatarFallback} from "./avatar/avatar"

export const User:FC = () => {
    return (
        <>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex flex-col items-start">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
                    Username
                </h4>
                <p className="leading-7  text-white">
                Рейтинг: 1230
                </p>
            </span>
        </>
    );
};

