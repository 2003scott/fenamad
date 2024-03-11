import Image from "next/image"
import { Inicio } from "./partials/Inicio"
import { About } from "./partials/About"
import { VisionMision } from "./partials/VisionMision"
import { Organigrama } from "./partials/Organigrama"
import { Hacemos } from "./partials/Hacemos"

export default function Home() {
    return (
        <>
            <Inicio/>
            <About/>
            <VisionMision/>
            <Organigrama />
            <Hacemos />
        </>
    )
}
