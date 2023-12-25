import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { IoDocumentOutline } from "react-icons/io5"

function ProjectCard({ title, description, image, link }: { title: string, description: string, image: string, link: string }) {

    return (
        <Link href={link} className={`flex items-center justify-center gap-2 mt-9 border hover:bg-gray-300 shadow-2xl transition border-neutral-400 rounded-xl p-3`}>
            <div className="rounded-xl overflow-hidden">
                <Image src={image} width={100} height={100} alt="Project logo" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className="text-xl">{description}</p>
                <button className="rounded-lg flex items-center justify-end text-slate-500 gap-1">
                    <p className="text-lg ">Open</p>
                    <FaArrowRight size={20} />
                </button>
            </div>
        </Link>
    )
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center mt-20 ">
            <h1 className='text-4xl font-bold'>My Projects</h1>
            <ProjectCard title='NoBrakes' description='Small 3D car game' image='/nobrakes.jpg' link='/project/nobrakes' />
            <ProjectCard title='CoinShot' description='Discord crypto bot' image='/coinshot.png' link='/project/coinshot' />
        </section>
    )
}