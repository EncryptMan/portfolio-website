import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function Home() {
    return (
        <>
            <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
                <Image src={'/nobrakes.jpg'} alt="NoBrakes Logo" fill className="object-cover" />
            </div>
            <h1 className='text-4xl font-bold'>NoBrakes</h1>
            <Link href={'https://youtube.com/embed/FEZhRmMjwBg'} target="_blank" className="flex items-center justify-center gap-1 text-orange-700">Watch Gameplay <TbExternalLink /></Link>
            <p>{'NoBrakes is a 3D car game where the objective is to complete levels without using brakes. The challenging terrain makes it difficult to reach the finish line, adding an element of strategy and skill. This game was developed as my initial venture into the realm of game development, an area I was deeply passionate about.'}</p>
            <Carousel className="mt-4">
                <CarouselContent>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_1.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_2.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_3.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_4.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_5.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/nobrakes/Screenshot_6.png'} alt="NoBrakes gameplay screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>

    )
}

