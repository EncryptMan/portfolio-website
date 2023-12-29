
import { FaBootstrap, FaCss3, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { GoCopilot } from "react-icons/go";
import React from "react";
import { IconContext } from "react-icons";


const skills = [
    {
        name: 'Python',
        icon: <FaPython />,
    },
    {
        name: 'JavaScript',
        icon: <IoLogoJavascript />,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
    },
    {
        name: 'HTML',
        icon: <FaHtml5 />,
    },
    {
        name: 'CSS',
        icon: <FaCss3 />,
    },
    {
        name: 'React',
        icon: <FaReact />,
    },
    {
        name: 'Next.js',
        icon: <TbBrandNextjs />,
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs />,
    },
    {
        name: 'Express.js',
        icon: <SiExpress />,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
    },
    {
        name: 'PostgreSQL',
        icon: <BiLogoPostgresql />,
    },
    {
        name: 'SQL',
        icon: <TbSql />,
    },
    {
        name: 'Supabase',
        icon: <RiSupabaseFill />,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap />,
    },
    {
        name: 'Docker',
        icon: <FaDocker />,
    },
    {
        name: 'Git',
        icon: <FaGitAlt />,
    },
    {
        name: 'GitHub',
        icon: <FaGithub />,
    },
    {
        name: 'Copilot',
        icon: <GoCopilot />,
    },
    {
        name: 'Vercel',
        icon: <IoLogoVercel />,
    },
]

function Skill({ name, icon }: { name: string, icon: JSX.Element }) {    

    return (
        <div className="border border-neutral-200 p-2 rounded-lg bg-white flex gap-1 items-center text-neutral-400">
            <div className="text-xl max-sm:text-md">
                {icon}
            </div>
            <p className="text-xl max-sm:text-md text-neutral-600">{name}</p>
        </div>
    )
}

export default function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center text-center mt-36">
            <h1 className='text-4xl font-bold'>My Skills</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl pt-5">
                {skills.map(skill => <Skill key={skill.name} name={skill.name} icon={skill.icon} />)}
            </div>
        </section>
    )
}