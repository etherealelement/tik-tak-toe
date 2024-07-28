import React, {FC} from 'react';
import {Star} from "@/shared/icons/star";
import {UserCounter} from "../user-counter/user-counter";
import {GameTimer} from "../game-timer/game-timer";
import {clsx} from "clsx";

type Props = {
    users: number,
    time: number
}

export const GameStats: FC<Props> = ({users, time}) => {
    return (
        <div className={clsx("flex items-center gap-5")}>
            <Star></Star>
            <UserCounter>{users}</UserCounter>
            <GameTimer>{time}</GameTimer>
        </div>
    );
};

