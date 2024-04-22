import React from "react";
import { Boxes } from "@aceternityui/BackgroundBoxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent, white)] pointer-events-none" />
      <h1 className="z-10 text-4xl font-bold leading-none sm:text-5xl">
        Your <span className="">AI Workforce</span>
        <span className=""> Awaits</span>
      </h1>
      <p className="z-10 px-18 mt-8 mb-4 text-lg">
        Accelerate marketing, sales, service, engineering, and intelligence <br />
        with AI agents that do important jobs in your enterprise and life.
      </p>
      <div className="flex flex-wrap justify-center">
        <a href="https://my.one.ie/login" onClick={(e) => e.preventDefault()} className="z-10">
          <button className="px-8 py-3 m-2 font-medium btn btn-rounded focus" onClick={(e) => e.preventDefault()}>
            START NOW
          </button>
        </a>
        <a href="#stats" onClick={(e) => e.preventDefault()} className="z-10">
          <button className="px-8 py-3 m-2 border btn btn-muted btn-rounded neutral" onClick={(e) => e.preventDefault()}>
            LEARN MORE...
          </button>
        </a>
      </div>
      <div className="z-10" style={{position: 'relative'}}>
        <p className="px-8 mt-4 mb-8">
          Free forever.{" "}
          <a className="link link-underline" href="/guides/how-to-profit-with-mit-and-open-source/" onClick={(e) => e.preventDefault()}>
            MIT License.
          </a>
        </p>
      </div>
        <Boxes />
    </div>
  );
}


