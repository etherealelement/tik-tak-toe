import { useState } from 'react';
import { GAME_SYMBOLS } from '@/shared/constants';
import { GameMove } from '@/shared/constants';
import { getNextMove } from './useGetNextMove';
import { computeWinner } from './useComputeWinner';

export const useGameField = (playersCount: number) => {
	const [{ cells, currentMove }, setGameState] = useState<{
		cells: GameMove[];
		currentMove: GameMove;
	}>(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
	}));

	const winnerSequence = computeWinner(cells, 3, 19);
	const nextMove = getNextMove(currentMove, playersCount);
	console.log(winnerSequence);
	const handleClickCell = (index: number) => {
		setGameState(state => {
			if (state.cells[index]) {
				return state;
			}
			return {
				...state,
				currentMove: getNextMove(state.currentMove, playersCount),
				cells: state.cells.map((symbol, id) =>
					id === index ? state.currentMove : symbol
				),
			};
		});
	};

	return {
		cells,
		currentMove,
		nextMove,
		winnerSequence,
		handleClickCell,
	};
};
