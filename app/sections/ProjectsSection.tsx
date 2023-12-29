import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

function ProjectCard({ title, description, image, link, skills }: { title: string, description: string, image: string, link: string, skills: string[] }) {

    return (
        <Link href={link} className={`mt-9 border hover:bg-gray-300 shadow-2xl transition border-neutral-400 rounded-xl p-3 grid grid-flow-col auto-cols-auto auto-rows-auto gap-5 max-sm:gap-2 max-sm:flex max-sm:flex-col items-center justify-center max-sm:text-center max-sm:max-w-xs`}>

            <div className="rounded-xl overflow-hidden sm:row-span-2">
                <Image src={image} width={170} height={170} alt="Project logo" />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold max-sm:text-xl'>{title}</h1>
                <p className="text-md max-w-md max-sm:text-sm">{description}</p>
            </div>

            <div className="flex items-center justify-between max-sm:place-self-end max-sm:flex-col max-sm:gap-2 w-full">
                <div className="flex items-center gap-1 flex-wrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-black/50 rounded-full text-white p-1 px-2 text-sm max-sm:text-xs">
                            {skill}
                        </div>
                    ))}
                </div>
                <button className="rounded-lg flex items-center justify-end text-slate-500 gap-1 hover:text-black transition max-md:place-self-end">
                    <p className="text-md max-sm:text-sm">Read More</p>
                    <FaArrowRight size={20} />
                </button>
            </div>

        </Link>
    )
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center mt-36 ">
            <h1 className='text-4xl font-bold'>My Projects</h1>
            <ProjectCard
                title='CoinShot'
                description='I created a Discord cryptocurrency bot. It uses APIs to get real-time data about cryptocurrencies.'
                image='/coinshot.png' link='/project/coinshot'
                skills={['Python', 'Discord.py', 'MongoDB']}
            />
            <ProjectCard
                title='Social Media'
                description='A basic social media website. It allows users to create account and make posts.'
                image='/vercel.png'
                link='/project/socialmedia' skills={['React', 'Next.js', 'Supabase']}
            />
            <ProjectCard
                title='NoBrakes'
                description='I created a small 3D car game. Without using breaks player has to reach the finish line. '
                image='/nobrakes.jpg'
                link='/project/nobrakes' skills={['Unreal Engine', 'Blender', 'C++']}
            />
        </section>
    )
}