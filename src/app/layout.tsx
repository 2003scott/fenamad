import type { Metadata } from "next"
import "./globals.css"
import { averia } from "@/fonts"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
    title: "Fenamad",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className="!scroll-smooth">
            <body className={averia.className}>
                <Navbar />
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}
