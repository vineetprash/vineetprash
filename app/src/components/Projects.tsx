// components/ProjectBentoGrid.tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

const projects = [
  {
    title: "Mentor Connect",
    description:
      "Built a 1:1 mentorship platform for Smart India Hackathon 2024. Achieved 2nd place in internal rounds.",
    image: "/mentorconnect.png",
    // link: "https://mentor-connect-roan.vercel.app",
    link: "https://github.com/vineetprash/mentor-connect",
  },
  {
    title: "GuessWhat",
    description:
      "Multiplayer drawing-guessing game using Canvas API and Gemini AI integration. Fun + smart.",
    image: "/guesswhat.png",
    link: "https://guesswhat-nu.vercel.app",
  },
  {
    title: "HTML Shooter",
    description:
      "2D game using just JavaScript (no canvas API!). Reinventing the wheel for fun.",
    image: "/htmlshooter.png",
    link: "https://vineetprash.github.io/HTML-Shooter",
  },
  {
    title: "Silent Hands Academy",
    description:
      "Clean and gamified application for learning Indian Sign language",
    image: "/silenthands.png",
    link: "https://silent-hands.vercel.app",
  },
];

export function ProjectBentoGrid() {
  return (
    <section
      className="w-full py-16 bg-neutral-950 min-h-screen px-4"
      id="projects"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Projects showcase
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <BentoGridItem
            key={i}
            className={`relative group cursor-pointer  overflow-hidden rounded-2xl 
            shadow-md transition-transform duration-300 hover:scale-[1.02]
            bg-[#323f65]  ${i === 3 || i === 6 ? "md:col-span-2" : ""} ${
              i === 2 ? "md:row-span-2" : ""
            }`}
            onClick={() => window.open(proj.link, "_blank")}
            header={
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover blur-md scale-105 group-hover:blur-sm transition duration-700"
                />
              </div>
            }
            title={
              <div className={`relative z-10 text-xl  font-semibold`}>
                {proj.title}
              </div>
            }
            description={
              <div className={`relative z-10  text-sm mt-2`}>
                {proj.description}
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
//               i === 3 || i === 6 ? "md:col-span-2" : ""
//             } ${i === 2 ? "md:row-span-2" : ""}`}
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
