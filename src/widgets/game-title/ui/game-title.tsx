import React from 'react';
import {Back} from "@/shared/ui/back";
import {Title} from "@/shared/ui-kit/title";
import {GameStats} from "@/shared/ui/game-stats";

export const GameTitle = () => {
    return (
        <div className="flex flex-col gap-6">
            <Back color={"primary"} isArrow={true}>На главную</Back>
            <Title color={"primary"}>Крестики нолики</Title>
             <GameStats
             users={2}
             time={1}
             ></GameStats>
        </div>
    );
};

