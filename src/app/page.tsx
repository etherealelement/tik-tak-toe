'use client';
import { Header } from '@/widgets/header';
import { GameTitle } from '@/widgets/game-title';
import { GameInfo } from '@/widgets/game-info';
import { GameField } from '@/features/game-field';
import { useState } from 'react';

export default function Home() {
	const [playersCount] = useState<number>(2);

	return (
		<div className='bg-zinc-950 min-h-screen'>
			<Header></Header>
			<main className='pt-6 mx-auto w-max'>
				<GameTitle playersCount={playersCount}></GameTitle>
				<GameInfo className={'mt-4'} playersCount={playersCount}></GameInfo>
				<GameField className={'mt-6'} playersCount={playersCount}></GameField>
			</main>
		</div>
	);
}
