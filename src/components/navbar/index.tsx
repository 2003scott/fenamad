"use client"
import { itemMenu } from "./itemMenu"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoMenuOutline } from "react-icons/io5"

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
        <header className={`flex items-center z-[999] w-full transition duration-300 ease-in-out ${scroll ? 'bg-white shadow-md fixed h-[90px] text-black' : 'h-[120px] absolute bg-transparent text-white'}`}>
            <nav className="container flex items-center justify-between px-5">
                <Link href="/">
                    <img src="/images/logo.png" alt="Fenamad" className="w-[70%] lg:w-full" />
                </Link>
                <ul className={`hidden lg:flex items-center gap-10 text-[1.25rem] font-medium`}>
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
                <button className="lg:hidden" onClick={handleShowMenu}>
                    <IoMenuOutline className="text-[40px]" />
                </button>
            </nav>
        </header>
        <div className={`z-[80] shadow-lg top-[90px] fixed bg-slate-50 w-full transition-all duration-700 ${showMenu ? "translate-y-0" : "-translate-y-full opacity-0"} `}>
                <nav className="flex flex-col gap-10 py-5 items-start px-8 md:px-24 lg:hidden">
                    {itemMenu.map((item, index) => (
                        <Link href={item.path} key={index} className="w-full font-medium after:content-[''] after:w-0 hover:after:w-full after:transition-all after:duration-500 after:h-[0.2rem] after:bg-primary relative after:absolute after:left-0 after:top-full hover:text-primary text-secondary">
                            {item.name}
                        </Link>
                    ))}
                    <button className="border-4 p-1 px-6 rounded-full border-primary">
                        Ayúdanos
                    </button>
                </nav>
            </div>
        </>
    )
}
