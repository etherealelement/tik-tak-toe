import { FC } from 'react';
import { Cross } from '../../icons/cross';
import { Circle } from '../../icons/circle';
import { Square } from '../../icons/square';
import { Triangle } from '../../icons/triangle';

import { GAME_SYMBOLS } from '../../constants';

import { clsx } from 'clsx';

type Props = {
	symbol: 'cross' | 'circle' | 'square' | 'triangle';
	className?: string;
};

export const GameSymbol: FC<Props> = ({ symbol, className, ...props }) => {
	const Icons =
		{
			[GAME_SYMBOLS.CROSS]: Cross,
			[GAME_SYMBOLS.CIRCLE]: Circle,
			[GAME_SYMBOLS.SQUARE]: Square,
			[GAME_SYMBOLS.TRIANGLE]: Triangle,
		}[symbol] ?? Cross;
	return <Icons className={clsx(className)} {...props} />;
};
