import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
    return (
        <>
            <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
                <Image src={'/coinshot.png'} alt="CoinShot Logo" fill className="object-cover" />
            </div>
            <h1 className='text-4xl font-bold'>CoinShot</h1>
            <Link href={'https://coinshot.pro'} target="_blank" className="flex items-center justify-center gap-1 text-orange-700">Open Website <TbExternalLink /></Link>
            <p>{'CoinShot is a cryptocurrency market bot designed for the Discord app. It leverages various APIs to fetch real-time market data and keep Discord users updated. This project represents my initial foray into Software as a Service (SaaS). I was motivated to create it because bots, being plug-ins for existing apps, are relatively straightforward to develop. Additionally, I chose the cryptocurrency niche due to my familiarity with it.'}</p>
            <Carousel className="mt-4">
                <CarouselContent>
                    <CarouselItem><Image src={'/coinshot/chart.png'} alt="Chart command" height={500} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/coinshot/price.png'} alt="Price command" height={500} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/coinshot/heatmap.png'} alt="Heatmap command" height={500} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/coinshot/fear-greed-index.png'} alt="Fear greed index command" height={500} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}