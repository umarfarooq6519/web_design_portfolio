import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../utils/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLongDown } from "@/public/ArrowLongDown";

export default function Home() {
  return (
    <main className="container mx-auto flex h-full w-full flex-col gap-26 lg:gap-38 xl:px-8">
      <section
        id="hero"
        className="flex h-[90vh] flex-col items-start justify-center gap-4 xl:flex-row"
      >
        {/* <Navbar /> */}
        <div className="hero-content flex h-full grow flex-col justify-center">
          {/* <p className="text-foreground/60 text-2xl md:text-3xl lg:text-5xl xl:text-3xl">
              Hi, I'm Umar,
            </p> */}
          <span className="uppercase drop-shadow">
            <h2 className="font-normal">Creative</h2>
            <h1>Website</h1>
            <h1>Designer</h1>
          </span>

          <div className="flex items-center gap-4 pt-6">
            <span className="mt-0.5 rounded-full bg-green-400 p-1.5 lg:mt-1.5 lg:p-2.5 xl:p-2"></span>
            <LinkButton
              text="Open to work"
              link="mailto:umar_farooq52@outlook.com"
            />
          </div>
        </div>

        <div className="hero-wrapper flex justify-end max-xl:w-full xl:-mt-40 xl:h-full xl:items-end">
          <span className="max-w-3xs text-end sm:max-w-2xs md:max-w-sm lg:max-w-md xl:max-w-2xs">
            <h6 className="font-normal">
              * Crafting websites for growing businesses, and convert visitors
              into customers.
            </h6>
          </span>
        </div>
      </section>

      <section id="mini-about" className="flex flex-col">
        <div className="flex items-start justify-between">
          <ArrowLongDown className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32" />

          <span className="flex max-w-2xs flex-col gap-12 sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl">
            <h3 className="font-normal md:leading-11 lg:leading-16">
              I build websites to your brand's story - blending creativity with
              functionality & experiences that feel natural to the brand while
              engaging users
            </h3>
            <span className="w-fit">
              <LinkButton link="/about" text="About" />
            </span>
          </span>
        </div>
      </section>

      <section
        id="projects-showcase"
        className="divide-foreground/10 flex flex-col"
      >
        <div className="projects flex flex-col divide-y">
          {projects.slice(0, 1).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <span className="w-fit pt-4 xl:mx-auto xl:pt-8">
          <LinkButton text="All Projects" link="/projects" />
        </span>
      </section>
    </main>
  );
}
