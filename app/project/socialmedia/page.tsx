import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


export default function Home() {
    return (
        <>
            <div className="rounded-full overflow-hidden shadow-3xl shadow-black relative w-32 h-32">
                <Image src={'/social-media.jpg'} alt="Social Media app Logo" fill className="object-cover" />
            </div>
            <h1 className='text-4xl font-bold'>Social Media</h1>
            <Link href={'https://social-media-lilac-tau.vercel.app/'} target="_blank" className="flex items-center justify-center gap-1 text-orange-700">Open Website <TbExternalLink /></Link>
            <p>{'This project is a fundamental social media website that provides users with the ability to create personal accounts and share posts. The platform is designed with a user-friendly interface to ensure a seamless experience. The primary objective behind the creation of this project was to enhance my understanding and proficiency in full-stack development. The project encompassed various aspects of full-stack development, including front-end design, back-end server management, database handling, and user authentication.'}</p>
            <Carousel className="mt-4">
                <CarouselContent>
                    <CarouselItem><Image src={'/socialmedia/Screenshot_1.png'} alt="Social media website screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/socialmedia/Screenshot_2.png'} alt="Social media website screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                    <CarouselItem><Image src={'/socialmedia/Screenshot_3.png'} alt="Social media website screenshot" height={400} width={500} className="rounded-lg overflow-hidden mx-auto" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}