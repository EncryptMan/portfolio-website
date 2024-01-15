import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function Home() {
    return (
        <main className="bg-neutral-100 py-36 bg-gradient-to-b from-orange-100 to-neutral-100 text-center w-full">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
                <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
                    <Image src={'/coinshot.png'} alt="CoinShot Logo" fill className="object-cover" />
                </div>
                <h1 className='text-4xl font-bold'>CoinShot</h1>
                <Link href={'https://coinshot.pro'} target="_blank" className="flex items-center justify-center gap-1 text-orange-700">Open Website <TbExternalLink /></Link>
                <p>{'CoinShot is a cryptocurrency market bot designed for the Discord app. It leverages various APIs to fetch real-time market data and keep Discord users updated. This project represents my initial foray into Software as a Service (SaaS). I was motivated to create it because bots, being plug-ins for existing apps, are relatively straightforward to develop. Additionally, I chose the cryptocurrency niche due to my familiarity with it. thnks'}</p>
            </div>
  
        </main>
    )
}