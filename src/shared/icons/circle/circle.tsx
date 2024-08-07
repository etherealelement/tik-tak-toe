import React, { FC } from 'react';
import { clsx } from 'clsx';

type Props = {
	className?: string;
	size?: 'small' | 'medium' | 'large';
};

export const Circle: FC<Props> = ({ size, className }) => {
	return (
		<>
			<svg
				className={clsx(
					{ 'w-4 h-4': size === 'small' },
					{ 'w-8 h-8': size === 'medium' },
					{ 'w-10 h-10': size === 'large' },
					className
				)}
				width='12'
				height='12'
				viewBox='0 0 12 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M6.00002 0C2.68629 0 0 2.68629 0 6.00002C0 9.31374 2.68629 12 6.00002 12C9.31374 12 12 9.31374 12 6.00002C12 2.68629 9.31371 0 6.00002 0ZM6.00002 10.5C3.51475 10.5 1.50001 8.48529 1.50001 6.00002C1.50001 3.51475 3.51475 1.50001 6.00002 1.50001C8.48529 1.50001 10.5 3.51475 10.5 6.00002C10.5 8.48529 8.48529 10.5 6.00002 10.5Z'
					fill='#0D9488'
				/>
			</svg>
		</>
	);
};
