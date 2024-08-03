export const GAME_SYMBOLS = {
	CIRCLE: 'circle',
	CROSS: 'cross',
	TRIANGLE: 'triangle',
	SQUARE: 'square',
} as const;

export type GameMove = 'cross' | 'circle' | 'triangle' | 'square';

export const MOVE_ORDER = [
	GAME_SYMBOLS.CROSS,
	GAME_SYMBOLS.CIRCLE,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE,
];
