import github from "/public/github.png";
import codechef from "/public/codechef.png";
import cssbattle from "/public/cssbattle.svg";
import leetcode from "/public/leetcode.png";
import linkedin from "/public/linkedin.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
function Hyperlinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-2 m-2 px-4 py-2", className)}>
      <a
        className="cursor-pointer"
        href="https://github.com/vineetprash"
        target="_blank"
      >
        <Image src={github} alt="github.logo" width={60} />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.codechef.com/users/vineetp1"
        target="_blank"
      >
        <Image src={codechef} alt="codechef.logo" width={60} />
      </a>
      <a
        className="cursor-pointer"
        href="https://leetcode.com/u/vineetp_1/"
        target="_blank"
      >
        <Image src={leetcode} alt="leetcode.logo" width={60} />
      </a>
      <a
        className="cursor-pointer my-auto"
        href="https://cssbattle.dev/player/rWBLFYkftUatF58QvdZUii5qLeg2"
        target="_blank"
      >
        <Image src={cssbattle} alt="cssbattle.logo" width={60} />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/vineet-prashant-994816257/"
        target="_blank"
      >
        <Image src={linkedin} alt="linkedin.logo" width={60} />
      </a>
    </div>
  );
}

export default Hyperlinks;
