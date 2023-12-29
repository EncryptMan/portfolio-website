import Image from "next/image";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-neutral-100 bg-gradient-to-b from-orange-100 to-neutral-100 py-36 px-10">
      <section id="home" className="flex flex-col items-center justify-center text-center">
        <div className="rounded-full overflow-hidden border-4 border-white shadow-3xl shadow-black relative w-32 h-32">
          <Image src={'/profile.jpeg'} alt="Muhammad Umar's profile picture" fill className="object-cover" />
        </div>
        <h1 className='text-5xl max-sm:text-3xl max-w-2xl mt-7'>{"Hello 👋, I'm"} <span className="font-bold">Muhammad Umar</span>{" from Pakistan. I'm a high school student 👨‍🎓 and a software developer 👨‍💻 with 4 years of experience. 😄"}</h1>
      </section>
      <div className="flex items-center justify-center my-20">
        <div className="w-1 h-20 bg-slate-500/30" />
      </div>
      <section id="about" className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className='text-4xl font-bold'>About Me</h1>
        <p className="text-2xl mt-5 max-w-2xl">I have a keen interest in <span className="italic">computer science</span> and <span className="italic">technology</span>. I channel my passion into software development, which started as a hobby. Initially, I was drawn towards <span className="italic font-semibold">game development</span>, but my interests evolved over time, leading me to <span className="italic font-semibold">full-stack development</span>. As a student, I dedicate my time to personal projects, which allows me to continuously learn and adapt to new technologies. I find immense joy in this process of learning and growing. 🚀</p>
      </section>
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
