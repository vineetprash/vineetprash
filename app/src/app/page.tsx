"use client";

import Bands from "@/components/Bands";
// import Bands2 from "@/components/Bands2";
// import ContactMe from "@/components/ContactMe";
import Hyperlinks from "@/components/Hyperlinks";
import { WarpBackground } from "@/components/magicui/warp-background";
import { ProjectBentoGrid } from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-x-hidden">
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
        <div className="relative z-10 pb-10 sm:pb-28 px-12 h-full">
          <div className="flex max-w-5xl mx-auto flex-col h-full sm:flex-row justify-end sm:justify-between items-start sm:items-end gap-8 sm:gap-6 text-white">
            <div className="space-y-4 max-w-2xl w-full sm:w-full mt-auto pt-20 sm:pt-0 sm:mt-44">
              <h2 className="text-3xl sm:text-5xl font-bold">hello</h2>
              <div className="text-2xl sm:text-4xl font-semibold">
                I&apos;m <span className="text-stone-400">Vineet Prashant</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-center sm:justify-between sm:mt-44 w-full sm:w-auto">
              <div className="text-base sm:text-sm font-medium text-left sm:text-justify w-full sm:w-72 mb-6 sm:mb-0">
                <span className="text-stone-400">
                  I have a strong passion for building games and developing
                  interesting fullstack systems
                </span>
              </div>

              <div className="w-full sm:w-auto">
                <Hyperlinks className="h-fit" />
              </div>
            </div>
          </div>
        </div>
        {/* Bands */}
      </section>
      <Bands count={10} />
      {/* Timeline */}
      <section className="relative z-10  " id="projects">
        <ProjectBentoGrid />
      </section>
      {/* Reverse Bands */}
      <Bands count={10} reverse />
      {/* <Bands count={10} /> */}
      {/* Contact Section
      <section className="relative z-10 px-6 md:px-24">
        <ContactMe />
      </section> */}
    </div>
  );
}
