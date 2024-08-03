import React, { FC } from 'react';
import { clsx } from 'clsx';
import { GAME_SYMBOLS, GameSymbols } from '@/shared/constants';
import { PlayerInfo } from './player-info/player-info';

type Props = {
	className?: string;
	currentMove: GameSymbols;
	playersCount: number;
};

const players = [
	{
		id: 1,
		name: 'Player1',
		rating: 1230,
		avatar: 'https://i.pravatar.cc/300?img=1',
		symbol: GAME_SYMBOLS.CROSS,
	},
	{
		id: 2,
		name: 'Player2',
		rating: 2230,
		avatar: 'https://i.pravatar.cc/300?img=4',
		symbol: GAME_SYMBOLS.CIRCLE,
	},
	{
		id: 3,
		name: 'Player3',
		rating: 3230,
		avatar: 'https://i.pravatar.cc/300?img=3',
		symbol: GAME_SYMBOLS.SQUARE,
	},
	{
		id: 4,
		name: 'Player4',
		rating: 4230,
		avatar: 'https://i.pravatar.cc/300?img=2',
		symbol: GAME_SYMBOLS.TRIANGLE,
	},
];

export const GameInfo: FC<Props> = ({
	playersCount,
	currentMove,
	className,
	...props
}) => {
	return (
		<div
			className={clsx(
				className,
				'border-[1px] border-zinc-800 rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3'
			)}
			{...props}
		>
			{players.slice(0, playersCount).map(player => (
				<PlayerInfo
					isTimerRunning={currentMove === player.symbol}
					key={player.id}
					rating={player.rating}
					name={player.name}
					isRight={player.id % 2 === 0}
					symbol={player.symbol}
					avatar={player.avatar}
				></PlayerInfo>
			))}
		</div>
	);
};
