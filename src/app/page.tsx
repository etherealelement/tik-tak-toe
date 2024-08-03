'use client';
import { Header } from '@/widgets/header';

import { GameField } from '@/features/game-field';
import { useState } from 'react';

export default function Home() {
	const [playersCount] = useState<number>(2);

	return (
		<div className='bg-zinc-950 min-h-screen'>
			<Header></Header>
			<GameField className={'mt-6'} playersCount={playersCount}></GameField>
		</div>
	);
}
