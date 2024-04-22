// "use client"; // Not needed because we are using Astro not NextJS
import React from "react";
import { PinContainer } from "@aceternityui/3dPin"

export function AnimatedPinDemo() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="Your Data"
                href="https://twitter.com/tonyoconnell"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight background sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
                        Database
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary via-purple-500 to-secondary" />
                </div>
            </PinContainer>
        </div>
    );
}

export default AnimatedPinDemo