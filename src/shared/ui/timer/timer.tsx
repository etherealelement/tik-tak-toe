import React, { FC } from 'react';
import { clsx } from 'clsx';

type Props = {
	isLowTime: boolean;
	className?: string;
	isTimerRunning: boolean;
	children: React.ReactNode;
};

export const Timer: FC<Props> = ({
	className,
	isLowTime,
	isTimerRunning,
	children,
	...props
}) => {
	return (
		<span
			className={clsx('text-white text-lg font-semibold w-[60px]', className, {
				'text-red-500': isLowTime,
				'opacity-50': !isTimerRunning,
			})}
			{...props}
		>
			{children}
		</span>
	);
};
