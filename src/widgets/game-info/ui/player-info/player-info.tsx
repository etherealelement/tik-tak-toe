import { User } from '@/entities/user';
import { GameSymbols } from '@/shared/constants';
import { Timer } from '@/shared/ui/timer';
import { FC } from 'react';
import { GameSymbol } from '@/shared/ui/game-symbol';

import { clsx } from 'clsx';
type Props = {
	name: string;
	symbol: GameSymbols;
	avatar?: string;
	rating: number;
	isRight: boolean;
};

export const PlayerInfo: FC<Props> = ({
	name,
	symbol,
	avatar,
	rating,
	isRight,
	...props
}): JSX.Element => {
	return (
		<div className={clsx('flex items-center gap-3')}>
			<div className={clsx('relative', isRight && 'order-3')}>
				<User
					className='w-44'
					state={'player'}
					name={name}
					rating={rating}
					avatar={avatar}
				/>
				<div className='flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1'>
					<GameSymbol symbol={symbol}></GameSymbol>
				</div>
			</div>
			<span className={clsx('h-6 w-px bg-zinc-800', isRight && 'order-2')} />
			<Timer start={true}>0:00</Timer>
		</div>
	);
};
