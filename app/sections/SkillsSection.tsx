
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const skills = [
    {
        name: 'HTML',
        icon: <FaHtml5 size={30} />,
    },
    {
        name: 'CSS',
        icon: <FaCss3 size={30} />,
    },
    {
        name: 'JavaScript',
        icon: <IoLogoJavascript size={30} />,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript size={30} />,
    },
    {
        name: 'React',
        icon: <FaReact size={30} />,
    },
    {
        name: 'Next.js',
        icon: <TbBrandNextjs size={30} />,
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Express.js',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'MongoDB',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Firebase',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Git',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'GitHub',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Figma',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Adobe XD',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Tailwind CSS',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Bootstrap',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Material UI',
        icon: <FaNodeJs size={30} />,
    },
    {
        name: 'Chakra UI',
        icon: <FaNodeJs size={30} />,
    },
]

function Skill({ name, icon }: { name: string, icon: JSX.Element }) {
    return (
        <div className="border border-neutral-200 p-2 rounded-lg bg-white flex gap-1 items-center text-neutral-400">
            {icon}
            <p className="text-xl text-neutral-600">{name}</p>
        </div>
    )
}

export default function SkillsSection() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center text-center mt-20">
            <h1 className='text-4xl font-bold'>My Skills</h1>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl pt-5">
                {skills.map(skill => <Skill key={skill.name} name={skill.name} icon={skill.icon} />)}
            </div>
        </section>
    )
}