import { projects } from "../../utils/projects";
import ProjectCard from "@/components/ProjectCard";
import ShufflingCards from "@/components/ShufflingCards";

export default function page() {
  return (
    <section
      id="projects-section"
      className="container mx-auto h-full min-h-screen"
    >
      <div className="main flex h-screen flex-col items-center justify-center">
        <div className="xl:-mt-26">
          <div className="-mt-56 overflow-hidden py-2">
            <h1 className="h-full text-center drop-shadow max-sm:leading-14">
              Case <br className="sm:hidden" /> Studies
            </h1>
          </div>
          <ShufflingCards />
        </div>
      </div>

      {/* TODO: Try making this a large text for word by word animation */}
      <div className="mx-auto flex w-full max-w-6xl justify-end py-14 pb-24 xl:py-32 xl:pt-36">
        <span className="w-full max-w-2xs text-end text-base sm:max-w-sm sm:text-lg md:max-w-md md:text-2xl lg:max-w-xl lg:text-3xl xl:text-2xl">
          A selection of projects highlighting my design fundamentals &
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
