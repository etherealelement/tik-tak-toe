import React, {FC} from 'react';

type Props = {
    start: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Timer: FC<Props> = ({className, children, start, ...props}) => {
    return (
        <span className="text-white text-lg font-semibold" {...props}>
            {children}
        </span>
    );
};
