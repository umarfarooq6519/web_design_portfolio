import Image from "next/image";
import { projects } from "../utils/projects";
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <section id="projects-section" className="h-full min-h-screen">
      <div className="main h-[90vh]">
        <div className="content pt-32">
          <h1 className="h-full overflow-x-hidden text-center text-7xl drop-shadow">
            Case <br /> Studies
          </h1>
        </div>
        <div className="wrapper">
          <div className="relative -mt-6 -ml-6 h-[300px] w-[200px]">
            {projects.slice(0, 3).map((project, index) => (
              <Image
                key={project.id}
                src={project.portraitImg!}
                alt={project.title}
                width={200}
                height={300}
                className={`border-foreground/10 absolute rounded object-cover shadow-md ${
                  index === 0
                    ? "top-0 left-0"
                    : index === 1
                      ? "top-5 left-5"
                      : "top-10 left-10"
                }`}
              />
            ))}
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
