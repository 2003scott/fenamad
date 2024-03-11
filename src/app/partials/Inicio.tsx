import { data } from "@/data"
import { redes } from "@/utils/redes"
import Link from "next/link"

export const Inicio = () => {
    return (
        <>
            <section className="bg-homecel md:bg-home h-screen bg-cover bg-no-repeat lg:bg-bottom grid items-center place-items-center">
                <div className="pt-[120px] xl:pt-[60px] 2xl:pt-0  container px-5 lg:px-0 text-white space-y-6">
                    <h2 className="font-bold text-[40px] md:text-[4.375rem] max-w-4xl">
                        {data.title}
                    </h2>
                    <p className="max-w-xl text-[0.875rem] md:text-[1.125rem] font-light">
                        {data.description}
                    </p>
                    <aside className="flex items-center gap-5">
                        <button className="bg-primary p-3 px-7 rounded-full text-[0.875rem] lg:text-[1.25rem]">
                            Contactanos
                        </button>
                        {redes.map(({ruta, icon}, index) => (
                            <Link href={ruta} key={index} className="text-[20px] md:text-[30px]">
                                {icon}
                            </Link>
                        ))}
                    </aside>
                </div>
            </section>
        </>
    )
}
