import React, { FC } from 'react';

import { Subtitle } from '@/shared/ui-kit/subtitle';
import { GAME_SYMBOLS } from '@/shared/constants';

import { TextMuted } from '@/shared/ui-kit/text-muted';
import { GameSymbol } from '@/shared/ui/game-symbol';

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
					Ход:{' '}
					<GameSymbol symbol={currentMove} className='w-5 h-5'></GameSymbol>
				</Subtitle>
				<TextMuted className={'flex items-center gap-2'}>
					Следующий:{' '}
					<GameSymbol symbol={nextMove} className='w-3 h-3'></GameSymbol>
				</TextMuted>
			</div>
			<div className='flex items-center gap-4'>{actions}</div>
		</div>
	);
};
