'use client';
import React, { FC } from 'react';

import { GameFieldLayout } from './ui/game-field-layout/game-field-layout';
import { GameMoveInfo } from './ui/game-move-info/game-move-info';
import { Button } from '@/shared/ui-kit/button';
import { GameGrid } from './ui/game-grid/game-grid';
import { GameCell } from './ui/game-cell/game-cell';
import { GameSymbol } from '@/shared/ui/game-symbol';
import { GameInfo } from './ui/game-info/game-info';
import { GameTitle } from './ui/game-title/game-title';

import { useGameField } from './model/useGameField';

type Props = {
	className?: string;
	playersCount: number;
};

export const GameField: FC<Props> = ({ className, playersCount, ...props }) => {
	const { cells, currentMove, handleClickCell, nextMove, winnerSequence } =
		useGameField(playersCount);

	const actions = (
		<>
			<Button variant={'default'}>Ничья</Button>
			<Button variant={'destructive'}>Сдаться</Button>
		</>
	);

	return (
		<main className='pt-6 mx-auto w-max'>
			<GameTitle playersCount={playersCount} className='mb-6'></GameTitle>
			<GameInfo
				playersCount={playersCount}
				currentMove={currentMove}
			></GameInfo>
			<GameFieldLayout className={className} {...props}>
				<GameMoveInfo
					actions={actions}
					nextMove={nextMove}
					currentMove={currentMove}
				></GameMoveInfo>
				<GameGrid>
					{cells.map((symbol, index) => (
						<GameCell
							key={index}
							onClick={() => handleClickCell(index)}
							isWinner={winnerSequence.includes(index)}
						>
							{symbol && <GameSymbol symbol={symbol} />}
						</GameCell>
					))}
				</GameGrid>
			</GameFieldLayout>
		</main>
	);
};
