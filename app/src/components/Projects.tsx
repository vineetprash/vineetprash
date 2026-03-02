import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

const projects = [
  {
    title: "Firefly",
    description:
      "A dx-friendly, minimalist, multithreaded Java HTTP Library packaged with its own HTTP Server.",
    tech: "Java, TCP Sockets, OOP and Modular Package Design",
    image: "/projects/firefly.jpg",
    link: "https://firefly-java.vercel.app",
    github: "https://github.com/vineetprash/firefly",
  },
  {
    title: "Morphcode",
    description:
      "An online code-compiler platform powered by docker, supporting multiple languages. ",
    tech: "Springboot, Webflux, Docker, React",
    image: "/projects/morphcode.jpg",
    github: "https://github.com/vineetprash/morphcode",
  },
  {
    title: "Mentor-Connect",
    description:
      "Built a 1:1 mentorship platform for Smart India Hackathon 2024. Achieved 2nd place in internal rounds.",
    image: "/projects/mentorconnect.jpg",
    tech: "MERN, Socket.IO, Cosine similarity matching",
    github: "https://github.com/vineetprash/mentor-connect",
  },
  {
    title: "GuessWhat",
    description:
      "Multiplayer drawing-guessing game using Canvas API and Gemini AI integration.",
    tech: "React, Socket.IO, Gemini API",
    image: "/projects/guesswhat.jpg",
    link: "https://guesswhat-nu.vercel.app",
  },
  {
    title: "HTML Shooter",
    description:
      "2D game using just JavaScript (no canvas API!). Reinventing the wheel for fun.",
    tech: "Plain old HTML :D",
    image: "/projects/htmlshooter.jpg",
    github: "https://vineetprash.github.io/HTML-Shooter",
  },
  {
    title: "Silent Hands Academy",
    description:
      "Clean and gamified application for learning Indian Sign language.",
    tech: "MERN",
    image: "/projects/silenthands.jpg",
    link: "https://silent-hands.vercel.app",
  },
];

export function ProjectBentoGrid() {
  return (
    <section
      className="w-full py-16 bg-[rgb(15,13,11)] min-h-screen px-4"
      id="projects"
    >
      <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-100 mb-12">
        Projects showcase
      </h2>

      <BentoGrid className="max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <BentoGridItem
            key={i}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl 
            shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
            bg-neutral-900 border border-neutral-800
            ${i === 6 || i === 5 || i === 1 ? "sm:col-span-2" : ""} ${
              i === 0 ? "sm:row-span-2" : ""
            }`}
            onClick={() => window.open(proj.link || proj.github, "_blank")}
            header={
              <>
                {/* Background Image - visible on mobile by default, blur on desktop hover */}
                <div className="absolute inset-0 z-0 opacity-30 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover scale-105 sm:group-hover:blur-sm transition duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 z-0 
                  bg-gradient-to-b from-black/95 via-black/85 to-black/70
                  sm:from-black/90 sm:via-black/80 sm:to-transparent 
                  opacity-90 group-hover:opacity-100 transition duration-500"
                />
              </>
            }
            title={
              <div className="relative z-10 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 leading-snug">
                {proj.title}
              </div>
            }
            description={
              <div className="relative z-10 mt-3 space-y-3">
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-[60ch]">
                  {proj.description}
                </p>

                {proj.tech && (
                  <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">
                    {proj.tech}
                  </p>
                )}

                {proj.github && (
                  <p
                    onClick={() => window.open(proj.github, "_blank")}
                    className="text-xs text-neutral-400 underline underline-offset-4 hover:text-neutral-200 transition-colors"
                  >
                    GitHub -&gt;
                  </p>
                )}
                {proj.link && (
                  <p
                    onClick={() => window.open(proj.link, "_blank")}
                    className="text-xs text-neutral-400 underline underline-offset-4 hover:text-neutral-200 transition-colors"
                  >
                    Website -&gt;
                  </p>
                )}
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
}

// export function ProjectBentoGrid() {
//   return (
//     <section className="w-full py-16 bg-neutral-950 h-screen " id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mb-10">
//         Projects
//       </h2>
//       <BentoGrid className="max-w-7xl mx-auto">
//         {projects.map((proj, i) => (
//           <BentoGridItem
//             key={i}
//             className={`group relative overflow-hidden ${
//               i === 3 || i === 6 ? "sm:col-span-2" : ""
//             } ${i === 2 ? "sm:row-span-2" : ""}`}
//             header={
//               <div className="absolute inset-0 z-0">
//                 <Image
//                   src={proj.image}
//                   alt={proj.title}
//                   fill
//                   className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             }
//             title={
//               <div className="z-10 text-white group-hover:text-white">
//                 {proj.title}
//               </div>
//             }
//             description={
//               <div className="z-10 text-gray-300 text-sm group-hover:text-white transition duration-300">
//                 {proj.description}
//               </div>
//             }
//           />
//         ))}
//       </BentoGrid>
//     </section>
//   );
// }
