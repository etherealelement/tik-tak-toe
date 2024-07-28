import React, {FC} from 'react';
import Link from "next/link";
import {ArrowLeft} from "@/shared/icons/arrow-left";
import {Subtitle} from "@/shared/ui-kit/subtitle/subtitle";



type Props = {
    children: React.ReactNode;
    isArrow?: boolean;
    color?: 'primary' | 'secondary';
}

export const Back: FC<Props> = ({color,children, isArrow,...props}) => {
    return (
        <Link href='/public' {...props} className={"flex items-center gap-2"}>
            {isArrow && <ArrowLeft  color={"primary"}/>}
            <Subtitle color={"primary"}>{children}</Subtitle>
        </Link>
    );
};
