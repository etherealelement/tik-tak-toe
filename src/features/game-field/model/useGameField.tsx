import { useState } from 'react';
import { GAME_SYMBOLS } from '@/shared/constants';
import { GameMove } from '@/shared/constants';

import { MOVE_ORDER } from '@/shared/constants';

export const useGameField = () => {
	const [{ cells, currentMove }, setGameState] = useState<{
		cells: GameMove[];
		currentMove: GameMove;
	}>(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.CROSS,
	}));

	const getNextMove = (
		currentMove: (typeof MOVE_ORDER)[number]
	): (typeof MOVE_ORDER)[number] => {
		const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
		return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
	};

	const handleClickCell = (index: number) => {
		setGameState(state => {
			if (state.cells[index]) {
				return state;
			}

			return {
				...state,
				currentMove: getNextMove(state.currentMove),
				cells: state.cells.map((symbol, id) =>
					id === index ? state.currentMove : symbol
				),
			};
		});
	};

	return {
		cells,
		currentMove,
		nextMove: getNextMove(currentMove),
		handleClickCell,
	};
};
