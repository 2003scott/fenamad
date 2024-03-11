import { itemMenu } from "./itemMenu"
import Link from "next/link"
import { IoMenuOutline } from "react-icons/io5"

export const Navbar = ()  => {
    return (
        <header className="absolute h-[120px] flex items-center z-[999] bg-transparent w-full">
            <nav className="container flex items-center justify-between px-5">
                <Link href="/">
                    <img src="/images/logo.png" alt="Fenamad" className="w-[70%] lg:w-full"/>
                </Link>
                <ul className="hidden lg:flex items-center gap-10 text-[1.25rem] text-white font-medium">
                    {itemMenu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <button className="border-4 p-1 px-6 rounded-full border-primary">
                        Ayúdanos
                    </button>
                </ul>
                <button className="lg:hidden">
                    <IoMenuOutline className="text-[40px]" />
                </button>
            </nav>
        </header>
    )
}
