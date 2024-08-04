import { MOVE_ORDER } from '@/shared/constants';

export const getNextMove = (
	currentMove: (typeof MOVE_ORDER)[number],
	playersCount: number
): (typeof MOVE_ORDER)[number] => {
	const slicedMoveOrderList = MOVE_ORDER.slice(0, playersCount);
	const nextMoveIndex = slicedMoveOrderList.indexOf(currentMove) + 1;
	return slicedMoveOrderList[nextMoveIndex] ?? slicedMoveOrderList[0];
};
