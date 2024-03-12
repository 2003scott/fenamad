import { redes } from "@/utils/redes"
import Link from "next/link"
import { IoIosArrowDropupCircle } from "react-icons/io"

export const Footer = () => {
    return (
        <div className="bg-footer bg-no-repeat bg-bottom bg-cover py-20 2xl:py-36 ">
            <footer className="max-w-2xl px-5 lg:px-0 container text-[#677168] space-y-5 flex flex-col items-center justify-center text-[35px]">
                <img src="/images/logo.png" alt="Fenamad" className="w-[60%]" />
                <p className="text-[1rem] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex items-center justify-center gap-5 text-[25px]">
                    {redes.map((item,index) => (
                        <Link href={item.ruta} key={index}>
                            {item.icon}
                        </Link>
                    ))}
                </div>
                <p className="text-[0.8rem] text-center">Copyright © 2024, Derechos reservados para FENAMAD</p>
                <Link href={"/"} className="flex items-center justify-center text-[35px]">
                    <IoIosArrowDropupCircle />
                </Link>
            </footer>
        </div>
    )
}
