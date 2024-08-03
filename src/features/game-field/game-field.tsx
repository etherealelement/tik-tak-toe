'use client';
import React, { FC, useState } from 'react';
import { GameFieldLayout } from './ui/game-field-layout';
import { GameMoveInfo } from './ui/game-move-info';
import { Button } from '@/shared/ui-kit/button';
import { GameGrid } from './ui/game-grid';
import { GameCell } from './ui/game-cell';
import { Cross } from '@/shared/icons/cross';

type Props = {
	className?: string;
};

const GAME_SYMBOLS: Record<'CIRCLE' | 'CROSS' | 'TRIANGLE' | 'SQUARE', string> =
	{
		CIRCLE: 'circle',
		CROSS: 'cross',
		TRIANGLE: 'triangle',
		SQUARE: 'square',
	} as const;

const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.CIRCLE,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE,
];

const getNextMove = (
	currentMove: (typeof MOVE_ORDER)[number]
): (typeof MOVE_ORDER)[number] => {
	const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
	return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
};

export const GameField: FC<Props> = ({ className, ...props }) => {
	const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
	const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);

	const nextMove = getNextMove(currentMove);

	const handleClickCell = () => {
		setCells(prevCells => {
			const newCells = [...prevCells];
			return newCells;
		});
	};

	const actions = (
		<>
			<Button variant={'default'}>Ничья</Button>
			<Button variant={'destructive'}>Сдаться</Button>
		</>
	);

	return (
		<GameFieldLayout className={className} {...props}>
			<GameMoveInfo
				actions={actions}
				nextMove={nextMove}
				currentMove={currentMove}
			></GameMoveInfo>
			<GameGrid>
				{cells.map((_, index) => (
					<GameCell key={index} onClick={handleClickCell}>
						<Cross />
					</GameCell>
				))}
			</GameGrid>
		</GameFieldLayout>
	);
};
