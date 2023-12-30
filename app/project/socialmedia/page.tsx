import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function Home() {
    return (
        <main className="bg-neutral-100 py-36 bg-gradient-to-b from-orange-100 to-neutral-100 text-center w-full">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
            ⚠️ This page is under development. Please check back later. Thank you! <br/>
            <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
            <Image src={'/social-media.jpg'} alt="Social Media app Logo" fill className="object-cover" />
            </div>
                <h1 className='text-4xl font-bold'>Social Media</h1>
                <p>A simple social media app</p>
                <Link href={'https://social-media-lilac-tau.vercel.app/'} target="_blank" className="flex items-center justify-center gap-1 text-orange-700">Open Website <TbExternalLink /></Link>
            </div>
        </main>
    )
}