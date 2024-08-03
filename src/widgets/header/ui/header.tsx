import { FC } from 'react';
import { Button } from '@/shared/ui-kit/button';
import { User } from '@/entities/user';

export const Header: FC = () => {
	return (
		<header className='flex h-24 items-center px-8 bg-zinc-950 shadow-lg justify-between border-b-[1px] border-zinc-800'>
			<Button variant={'secondary'}>Играть</Button>
			<button>
				<User
					figure='circle'
					state={'header'}
					name='Player'
					rating={1100}
				></User>
			</button>
		</header>
	);
};
