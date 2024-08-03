'use client';
import React, { FC, useState } from 'react';
import { type GameMove } from '@/shared/constants';

import { GameFieldLayout } from './ui/game-field-layout';
import { GameMoveInfo } from './ui/game-move-info';
import { Button } from '@/shared/ui-kit/button';
import { GameGrid } from './ui/game-grid';
import { GameCell } from './ui/game-cell';
import { GAME_SYMBOLS } from '@/shared/constants';
import { GameSymbol } from '@/shared/ui/game-symbol';

import { MOVE_ORDER } from '@/shared/constants';
import { useGameField } from './model/useGameField';

type Props = {
	className?: string;
};

export const GameField: FC<Props> = ({ className, ...props }) => {
	const { cells, currentMove, handleClickCell, nextMove } = useGameField();

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
				{cells.map((symbol, index) => (
					<GameCell key={index} onClick={() => handleClickCell(index)}>
						{symbol && <GameSymbol symbol={symbol} />}
					</GameCell>
				))}
			</GameGrid>
		</GameFieldLayout>
	);
};
