import Image from "next/image";
import { projects } from "../utils/projects";
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <section id="projects-section" className="h-full min-h-screen">
      <div className="main h-[90vh]">
        <div className="content pt-32">
          <h1 className="h-full overflow-x-hidden text-center text-7xl">
            Case <br /> Studies
          </h1>
        </div>
        <div className="wrapper">
          <div className="relative -mt-6 -ml-6 h-[300px] w-[200px]">
            <Image
              src="/images/projects/pawsenvy/thumbnail_portrait.jpeg"
              alt="base"
              width={200}
              height={300}
              className="border-foreground/10 rounded border object-cover shadow-md"
            />
            <Image
              src="/images/projects/buzztalk/thumbnail_portrait.jpeg"
              alt="middle"
              width={200}
              height={300}
              className="border-foreground/10 absolute top-5 left-5 rounded border shadow-md"
            />
            <Image
              src="/images/projects/pawsenvy/thumbnail_portrait.jpeg"
              alt="top"
              width={200}
              height={300}
              className="border-foreground/10 absolute top-10 left-10 rounded border object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end py-14 pb-24">
        <span className="w-full max-w-2xs text-end">
          A selection of case studies highlighting my design fundamentals &
          workflows.
        </span>
      </div>

      <section
        id="projects-showcase"
        className="divide-foreground/10 flex flex-col divide-y"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
  );
}
