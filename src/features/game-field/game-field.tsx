import React, {FC} from 'react';
import {clsx} from "clsx";
import {Circle} from "@/shared/icons/circle";
import {Cross} from "@/shared/icons/cross";
import {TextMuted} from "@/shared/ui-kit/text-muted";
import {Subtitle} from "@/shared/ui-kit/subtitle";
import {Button} from "@/shared/ui-kit/button";
import {Cell} from "@/shared/ui/cell";


type Props = {
    className?: string;
    children: React.ReactNode;
}

const cells = new Array(19 * 19).fill(null)

export const GameField: FC<Props> = ({className, children, ...props}) => {
    return (
        <div className={clsx("rounded-2xl border-[1px] border-zinc-800 shadow-md px-8 py-4", className)} {...props}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <Subtitle color={"primary"} className={"flex items-center gap-2"}>
                        Ход:<Circle size={"small"}></Circle>
                    </Subtitle>
                    <TextMuted className={"flex items-center gap-2"}>
                        Следующий: <Cross size={"small"}></Cross>
                    </TextMuted>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant={"default"}>Ничья</Button>
                    <Button variant={"destructive"}>Сдаться</Button>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
                {cells.map((_, i) => <Cell key={i}><Circle size={"small"}/></Cell>)}
            </div>
        </div>
    );
};
