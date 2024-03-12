import Image from "next/image"
import { Inicio } from "./partials/Inicio"
import { About } from "./partials/About"
import { VisionMision } from "./partials/VisionMision"
import { Organigrama } from "./partials/Organigrama"
import { Hacemos } from "./partials/Hacemos"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <>
            <Inicio/>
            <About/>
            <div>
                <img src="/images/icon-flor.png" alt="flor" className="hidden lg:block absolute right-0 pt-20" />
                <VisionMision/>
                <img src="/images/icon-pavo.svg" alt="flor" className="hidden lg:block absolute left-0 pt-28" />
                <Organigrama />
            </div>
            <Hacemos />
            <Footer />
        </>
    )
}
