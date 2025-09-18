import Image from "next/image";
import { projects } from "../../utils/projects";
import ProjectCard from "@/components/ProjectCard";

export default function page() {
  return (
    <section
      id="projects-section"
      className="container mx-auto h-full min-h-screen"
    >
      <div className="main flex h-screen flex-col items-center justify-center">
        <div className="xl:-mt-26">
          <div className="content -mt-56">
            <h1 className="h-full text-center drop-shadow">
              Case <br className="sm:hidden" /> Studies
            </h1>
          </div>
          <div className="wrapper relative -mt-4 -ml-6 min-h-full md:-mt-5 lg:-mt-6 lg:-ml-10 xl:-mt-9">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className={`absolute h-[280px] w-[200px] overflow-hidden rounded shadow-sm sm:h-[320px] sm:w-[260px] md:h-[380px] md:w-[310px] lg:h-[480px] lg:w-[400px] xl:h-[460px] xl:w-[380px] ${index === 0 ? "top-0 left-0 xl:left-100" : index === 1 ? "top-5 left-5 xl:left-105" : "top-10 left-10 xl:left-110"}`}
              >
                <Image
                  src={project.portraitImg!}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end py-14 pb-24 xl:py-32 xl:pt-36">
        <span className="w-full max-w-2xs text-end text-base sm:max-w-sm sm:text-lg md:max-w-md md:text-2xl lg:max-w-xl lg:text-3xl xl:text-2xl">
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
