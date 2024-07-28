import {Header} from '@/widgets/header';
import {GameTitle} from "@/widgets/game-title";
import {GameInfo} from "@/widgets/game-info";

export default function Home() {
    return (
        <div className='bg-zinc-950 min-h-screen'>
            <Header></Header>
            <main className="pt-6 mx-auto max-w-[616px]">
                <GameTitle></GameTitle>
                <GameInfo className={"mt-4"}></GameInfo>
            </main>
        </div>
    );
}
