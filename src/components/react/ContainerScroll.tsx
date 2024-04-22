import React from "react";
import { ContainerScroll } from "@aceternityui/ContainerScroll";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Scroll Animations
                            </span>
                        </h1>
                    </>
                }
            >
                <video
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </ContainerScroll>
        </div>
    );
}

export default HeroScrollDemo
