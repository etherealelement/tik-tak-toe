import React, { FC } from 'react';

import { Subtitle } from '@/shared/ui-kit/subtitle';
import { Circle } from '@/shared/icons/circle';
import { Cross } from '@/shared/icons/cross';
import { Square } from '@/shared/icons/square';
import { Triangle } from '@/shared/icons/triangle';

import { TextMuted } from '@/shared/ui-kit/text-muted';

const SYMBOLS: Record<
	'cross' | 'circle' | 'triangle' | 'square',
	React.ReactNode
> = {
	cross: <Cross />,
	circle: <Circle />,
	triangle: <Triangle />,
	square: <Square />,
} as const;

type gameMove = 'cross' | 'circle' | 'triangle' | 'square';

type Props = {
	className?: string;
	actions: React.ReactNode;
	nextMove: gameMove;
	currentMove: gameMove;
};

export const GameMoveInfo: FC<Props> = ({
	className,
	nextMove,
	currentMove,
	actions,
	...props
}) => {
	return (
		<div className='flex items-center justify-between' {...props}>
			<div className='flex flex-col'>
				<Subtitle color={'primary'} className={'flex items-center gap-2'}>
					Ход: {SYMBOLS[currentMove]}
				</Subtitle>
				<TextMuted className={'flex items-center gap-2'}>
					Следующий: {SYMBOLS[nextMove]}
				</TextMuted>
			</div>
			<div className='flex items-center gap-4'>{actions}</div>
		</div>
	);
};
