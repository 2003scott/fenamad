
export const VisionMision = () => {
    return (
        <>
            <section className="container py-10 lg:py-16 px-5 lg:px-0 space-y-5 lg:space-y-0 lg:flex max-w-6xl">
                <div>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <img src="/images/icon-visor.svg" alt="Vision" />
                        <h2 className="text-[1.8rem] font-bold text-secondary">Visión</h2>
                    </div>
                    <p className="text-center lg:text-start md:text-[1.5rem]  text-[#677168]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>

                <img src="/images/line.svg" alt="line" className="mx-auto lg:rotate-90" />

                <div className="relative">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                        <img src="/images/icon-flag.svg" alt="Mision" />
                        <h2 className="text-[1.8rem] font-bold text-secondary">Misión</h2>
                    </div>
                    <p className="text-center lg:text-start md:text-[1.5rem] text-[#677168]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
            </section>
        </>
    )
}
