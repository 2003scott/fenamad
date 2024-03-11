import { BiWorld } from "react-icons/bi"

export const About = () => {
    return (
        <>
            <section className="container px-5 py-10 lg:py-24 flex flex-col lg:flex-row gap-5 lg:gap-20 bg-aboutcel lg:bg-about bg-no-repeat bg-right-top">
                <div className="order-2 lg:order-1">
                    <img src="/images/icon-about.png" alt="about" className="shadow-xl shadow-gray-500" draggable="false"/>
                </div>
                <div className="order-1 lg:order-2">
                    <BiWorld className="text-[30px] lg:text-[35px] text-[#9D3328]" />
                    <h2 className="text-[20px] lg:text-[1.3rem] font-light text-secondary">Conócenos más</h2>
                    <h2 className="text-[30px] lg:text-[2.8rem] font-bold text-secondary">¿Quiénes somos?</h2>
                    <p className="text-[1rem] lg:text-[1.5rem] font-light max-w-lg text-[#677168]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-[1rem]  lg:text-[1.5rem] font-light max-w-lg text-[#677168]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </section>
        </>
    )
}
