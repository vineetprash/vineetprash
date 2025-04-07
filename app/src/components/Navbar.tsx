"use client";
import React from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return <Navbar className="top-4" />;
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0  w-fit rounded-full mx-auto z-50 opacity-95 p-0",
        className
      )}
    >
      <Menu setActive={() => {}}>
        <a href="#about" className=" scroll-smooth">
          About
        </a>
        <a href="#projects" className=" scroll-smooth">
          Projects
        </a>
        {/* <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects"> */}
        {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4"> */}
        {/* <ProductItem
              title="MentorConnect"
              href="https://mentor-connect-roan.vercel.app/"
              src="https://ilelyedtzhdnayakctvf.supabase.co/storage/v1/object/public/portfolio/mentorconnect.png?t=2024-10-06T16%3A46%3A26.361Z"
              description="Find 1:1 mentorship from mentors tailored for you"
            />
            <ProductItem
              title="Guesswhat"
              href="https://guesswhat-nu.vercel.app/"
              src="https://ilelyedtzhdnayakctvf.supabase.co/storage/v1/object/public/portfolio/mentorconnect.png?t=2024-10-06T16%3A46%3A26.361Z"
              description="An online multiplayer drawing-guessing game"
            />
            <ProductItem
              title="HTML-Shooter"
              href="https://vineetprash.github.io/HTML-Shooter/"
              src="https://ilelyedtzhdnayakctvf.supabase.co/storage/v1/object/public/portfolio/shooter2.png?t=2024-11-16T07%3A15%3A08.894Z"
              description="An online multiplayer drawing-guessing game"
            /> */}
        {/* </div> */}
        {/* </MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Contact Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mail</HoveredLink>
            <HoveredLink href="/individual">LinkedIn</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
