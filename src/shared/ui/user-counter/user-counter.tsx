import React, {FC} from 'react';
import {User} from "@/shared/icons/user";
import {clsx} from "clsx";
import {TextMuted} from "@/shared/ui-kit/text-muted";

type Props = {
    className?: string
    children: React.ReactNode
}

export const UserCounter: FC<Props> = ({children,className,...props}) => {
    return (
        <div className={clsx("flex items-center gap-2  h-4",className)} {...props}>
            <User></User>
            <TextMuted>{children}</TextMuted>
        </div>
    );
};
