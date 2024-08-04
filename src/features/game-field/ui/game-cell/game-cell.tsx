import React, { DetailedHTMLProps, FC } from 'react';
import { clsx } from 'clsx';

interface Props
	extends DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	className?: string;
	isWinner?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export const GameCell: FC<Props> = ({
	onClick,
	className,
	children,
	isWinner,
	...props
}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={clsx(
					'border-[1px] border-zinc-800 -ml-px -mt-px flex items-center justify-center',
					className,
					isWinner && 'bg-blue-600/10'
				)}
				{...props}
			>
				{children}
			</button>
		</>
	);
};
