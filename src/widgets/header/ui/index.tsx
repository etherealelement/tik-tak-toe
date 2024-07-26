import { FC } from 'react';
import {Button} from "@/shared/ui/button";
import {Profile} from "./profile/profile";

export const Header: FC = () => {
	return <header className="flex h-24 items-center px-8 bg-zinc-950 shadow-lg justify-between">
		<Button variant={"secondary"}>Играть</Button>
		<Profile></Profile>
	</header>;
};
