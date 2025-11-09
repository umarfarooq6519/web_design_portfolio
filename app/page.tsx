import LinkButton from "@/components/LinkButton";
import { projects } from "../utils/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLongDown } from "@/public/ArrowLongDown";
import { Star } from "@/public/Star";
import RotatingWords from "@/components/RotatingTitle";
import WordByWordAnimation from "@/components/WordByWordAnimation";

export default function Home() {
  return (
    <main className="container mx-auto flex h-full w-full flex-col gap-26 overflow-x-hidden lg:gap-38 xl:px-8">
      <section
        id="hero"
        className="flex h-[90vh] flex-col items-start justify-center gap-4 xl:flex-row"
      >
        {/* <Navbar /> */}
        <div className="hero-content flex h-full grow flex-col justify-center">
          <span className="uppercase drop-shadow">
            <div className="overflow-hidden">
              <h2 className="font-normal">Creative</h2>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-12 w-12 sm:h-15 sm:w-15 lg:h-20 lg:w-20" />{" "}
              <h1>Website</h1>
            </div>

            <RotatingWords />
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
            <WordByWordAnimation />
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

        <span className="mx-auto w-fit pt-4 xl:pt-8">
          <LinkButton text="All Projects" link="/projects" />
        </span>
      </section>
    </main>
  );
}
