"use client";

import Bands from "@/components/Bands";
// import ContactMe from "@/components/ContactMe";
import Hyperlinks from "@/components/Hyperlinks";
import { WarpBackground } from "@/components/magicui/warp-background";
import { ProjectBentoGrid } from "@/components/Projects";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-[#323f65] to-[#36539e] min-h-screen w-full relative overflow-x-hidden">
      {/* <div className="absolute bg-black bottom-0 blur-[100px] rounded-full aspect-square w-96" /> */}
      {/* <div className="absolute bg-pink-500 blur-[200px] rounded-full aspect-square w-44" />
      <div className="absolute bg-blue-500 blur-[200px] rounded-full aspect-square w-44" /> */}
      {/* <div className="absolute right-0 bg-yellow-500 blur-[200px] rounded-full aspect-square w-44" /> */}
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden flex flex-col justify-end"
        id="about"
      >
        {/* Background Hover Effect */}
        <div className="absolute inset-0 z-0">
          <WarpBackground className="w-full h-full">
            <></>
          </WarpBackground>
        </div>

        {/* Foreground content aligned to bottom of section */}
        <div className="relative z-10 pb-10 lg:pb-28 px-6 h-full">
          <div className="flex max-w-5xl mx-auto flex-col h-full  lg:flex-row justify-between items-center lg:items-end gap-6 text-white">
            <div className="space-y-4 max-w-2xl w-56 lg:w-full">
              <h2 className="text-3xl sm:text-5xl font-bold mt-44">hello</h2>
              <div className="text-2xl sm:text-4xl font-semibold">
                I&apos;m <span className="text-stone-400">Vineet Prashant</span>
              </div>
            </div>

            <div className="flex flex-col lg:items-center lg:justify-between  lg:mt-44">
              <div className="text-lg sm:text-md font-semibold mx-auto text-justify w-56 lg:w-72 flex lg:text-wrap">
                <span className="text-stone-400">
                  I have a strong passion for building games and developing
                  interesting fullstack systems
                </span>
              </div>

              <div className="w-full lg:w-auto">
                <Hyperlinks className="h-fit" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bands */}
      <Bands count={10} />
      {/* Timeline */}
      <section className="relative z-10  " id="projects">
        <ProjectBentoGrid />
      </section>
      {/* Reverse Bands */}
      {/* <Bands count={10} reverse /> */}
      {/* Contact Section
      <section className="relative z-10 px-6 md:px-24">
        <ContactMe />
      </section> */}
    </div>
  );
}
