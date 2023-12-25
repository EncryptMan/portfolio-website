'use client';

import Link from "next/link";

function NavItem({ label, href }: { label: string; href: string }) {
    return (
        <Link href={href} className="hover:bg-slate-300 p-3 rounded-full text-neutral-600 hover:text-black">{label}</Link>
    )
}

export default function Navbar() {


    return (
        <div className="fixed top-5 flex items-center justify-center w-full z-50">
            <nav className="bg-slate-200/70 rounded-full flex gap-7 max-sm:gap-4 p-2 backdrop-blur-lg">
                <NavItem label="Home" href="/#home" />
                <NavItem label="About" href="/#about" />
                <NavItem label="Projects" href="/#projects" />
                <NavItem label="Skills" href="/#skills" />
            </nav>
        </div>
    )
}