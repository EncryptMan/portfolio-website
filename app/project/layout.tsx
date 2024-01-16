

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-neutral-100 py-36 px-12 bg-gradient-to-b from-orange-100 to-neutral-100 text-center w-full">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
                {children}
            </div>
        </main>
    )
}