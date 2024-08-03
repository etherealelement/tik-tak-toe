import React, { FC } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar/avatar';
import { UserTitle } from '@/shared/ui/user-title';
import { Subtitle } from '@/shared/ui-kit/subtitle/subtitle';
import { clsx } from 'clsx';
import { Arrow } from '@/shared/icons/arrow';

type Props = {
	avatar?: string;
	name: string;
	rating: number;
	state: 'header' | 'player';
	className?: string;
};

export const User: FC<Props> = ({
	state,
	avatar = 'https://github.com/shadcn.png',
	name,
	rating,
	className,
	...props
}) => {
	return (
		<div
			className={clsx('flex items-center gap-3 relative', className)}
			{...props}
		>
			<Avatar>
				<AvatarImage src={avatar} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<span className='flex flex-col items-start overflow-hidden'>
				<UserTitle color={'primary'} className='text-ellipsis'>
					{name}
				</UserTitle>
				<Subtitle color={'primary'}>Рейтинг {rating}</Subtitle>
			</span>
			{state === 'header' && <Arrow color={'primary'}></Arrow>}
		</div>
	);
};
