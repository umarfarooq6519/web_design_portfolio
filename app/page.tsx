import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./utils/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="container mx-auto flex h-full w-full flex-col gap-26">
      <section
        id="hero"
        className="flex h-[90vh] flex-col items-start justify-center gap-4"
      >
        {/* <Navbar /> */}

        <div className="hero-content grow">
          <div className="flex h-full flex-col justify-center">
            <p className="text-foreground/60 text-2xl">Hi, I'm Umar,</p>
            <span className="uppercase drop-shadow">
              <h2 className="font-normal">@ Creative</h2>
              <h1>Website</h1>
              <h1>Designer</h1>
            </span>

            <div className="flex items-center gap-4 pt-6">
              {/* <span className="mt-0.5 rounded-full bg-green-400 p-1.5"></span> */}
              <LinkButton
                text="Open to work"
                link="mailto:umar_farooq52@outlook.com"
              />
            </div>
          </div>
        </div>

        <div className="hero-wrapper flex w-full justify-end">
          <span className="max-w-3xs text-end">
            <h6 className="font-normal">
              {/* I create brands, design <br /> websites & shape digital products. */}
              I design websites to tell your brand's story, and convert visitors
              into customers.
            </h6>
          </span>
        </div>
      </section>

      <section id="mini-about" className="flex flex-col">
        <div className="flex items-start justify-between">
          <Image src={"/arrow-long-down.svg"} alt=">" width={70} height={70} />

          <span className="flex max-w-2xs flex-col gap-12">
            <h3 className="font-normal">
              I build websites for growing businesses - blending creativity with
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

        <span className="w-fit pt-4">
          <LinkButton text="Projects" link="/projects" />
        </span>
      </section>
    </main>
  );
}
