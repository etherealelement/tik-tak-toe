import React, { FC } from 'react';
import { Back } from '@/shared/ui/back';
import { Title } from '@/shared/ui-kit/title';
import { GameStats } from '@/shared/ui/game-stats';
import { clsx } from 'clsx';

type Props = {
	playersCount: number;
	className?: string;
};

export const GameTitle: FC<Props> = ({ playersCount, className, ...props }) => {
	return (
		<div className={clsx('flex flex-col gap-6', className)} {...props}>
			<Back color={'primary'} isArrow={true}>
				На главную
			</Back>
			<Title color={'primary'}>Крестики нолики</Title>
			<GameStats users={playersCount} time={1}></GameStats>
		</div>
	);
};
