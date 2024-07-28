import {Header} from '@/widgets/header';
import {GameTitle} from "@/widgets/game-title";
import {GameInfo} from "@/widgets/game-info";
import {GameField} from "@/features/game-field";

export default function Home() {
    return (
        <div className='bg-zinc-950 min-h-screen'>
            <Header></Header>
            <main className="pt-6 mx-auto w-max">
                <GameTitle></GameTitle>
                <GameInfo className={"mt-4"}></GameInfo>
                <GameField className={"mt-6"}>123</GameField>
            </main>
        </div>
    );
}
