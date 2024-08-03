import React, { DetailedHTMLProps, FC } from 'react';
import { Cell } from '@/shared/ui/cell';
import { Circle } from '@/shared/icons/circle';

import { clsx } from 'clsx';

interface Props
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	className?: string;
	children: React.ReactNode;
}

export const GameCell: FC<Props> = ({ className, children, ...props }) => {
	return (
		<>
			<button
				className={clsx(
					'border-[1px] border-zinc-800 -ml-px -mt-px flex items-center justify-center',
					className
				)}
				{...props}
			>
				{children}
			</button>
		</>
	);
};
