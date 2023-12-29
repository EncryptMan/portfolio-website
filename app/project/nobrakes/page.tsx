import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function Home() {
    return (
        <main className="bg-neutral-100 py-36 bg-gradient-to-b from-orange-100 to-neutral-100 text-center w-full">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
            ⚠️ This page is under development. Please check back later. Thank you! <br/>
            <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
            <Image src={'/nobrakes.jpg'} alt="NoBrakes Logo" fill className="object-cover" />
            </div>
                <h1 className='text-4xl font-bold'>Nobrakes</h1>
                <p>A small 3D car game</p>
                <iframe width={500} height={250} src="https://youtube.com/embed/FEZhRmMjwBg" allowFullScreen/>
            </div>
        </main>
    )
}

