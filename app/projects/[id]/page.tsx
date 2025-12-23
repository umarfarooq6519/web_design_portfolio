import { projects } from "@/utils/projects";
import LinkButton from "@/components/LinkButton";
import { ArrowLeft } from "@/public/ArrowLeft";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return <p className="mt-20 text-center text-xl">😔 Project not found</p>;

  return (
    <section id="project" className="h-full min-h-screen">
      <div className="flex h-screen items-center justify-center">
        <div className="main container mx-auto h-fit">
          <div className="content pt-32 md:pt-36 lg:pt-56 xl:pt-10">
            <div className="overflow-hidden">
              <h1 className="h-full text-center text-6xl drop-shadow sm:text-7xl md:text-[7rem] lg:text-9xl lg:leading-28">
                {project.title}
              </h1>
            </div>

            {project.portraitImg && (
              <div className="wrapper flex justify-end xl:justify-center">
                <div className="relative -mt-4 -mr-4 h-[280px] w-[200px] sm:-mr-6 sm:h-[320px] sm:w-[260px] md:-mt-6 md:h-[420px] md:w-[340] lg:-mt-8 lg:-mr-10 lg:h-[550px] lg:w-[440px] xl:-mr-0 xl:h-[460px] xl:w-[370px]">
                  <Image
                    className="rounded object-cover shadow-sm"
                    src={project.portraitImg}
                    alt={`${project.title} portrait`}
                    fill
                    priority
                  />
                </div>
              </div>
            )}
          </div>

          <div className="relative -mt-12 flex flex-col gap-4 pl-1 text-xl sm:text-2xl lg:gap-6 lg:text-[2rem] xl:-mt-60 xl:text-xl">
            <span>
              <b>Year</b>
              <p>{project.year}</p>
            </span>
            <span>
              <b>Project Type</b>
              <p>{project.projectType}</p>
            </span>
            <span>
              <b>My Role</b>
              <p>{project.roles.join(", ")}</p>
            </span>
          </div>
        </div>
      </div>

      <div className="content mt-20 xl:mt-32">
        <div className="relative -mx-4 h-[280px] w-screen sm:-mx-6 sm:h-[380px] md:h-[480px] lg:-mx-10 lg:h-[600px]">
          <Image
            src={project.landscapeImg}
            alt={`${project.title} landscape`}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* ##### overview ##### */}
        <div className="container mx-auto mt-14 md:mt-22 xl:mt-34">
          <h4>Overview</h4>
          <h3 className="mt-3 max-w-4xl md:pt-4 xl:text-4xl">
            {project.description}
          </h3>
          {project.problem && (
            <p className="mt-8 md:mt-12 md:text-2xl lg:text-3xl lg:leading-9 xl:max-w-2xl xl:text-xl">
              {project.problem}
            </p>
          )}
        </div>

        {/* ##### solution ##### */}
        {project.solution && (
          <div className="container mx-auto mt-10 flex justify-end sm:mt-14 md:mt-18 lg:mt-22">
            <span className="max-w-2xl">
              <h4 className="font-medium">Solution</h4>
              <p className="pt-2 text-base sm:text-lg md:text-2xl lg:text-3xl lg:leading-9 xl:text-xl">
                {project.solution}
              </p>
            </span>
          </div>
        )}

        {/* ##### focus areas ##### */}
        {project.focusAreas && (
          <div className="focus-areas bg-foreground text-background -mx-4 mt-18 px-5 py-8 sm:-mx-6 sm:px-7 sm:py-12 md:py-14 lg:-mx-10 lg:mt-22 lg:px-9 lg:py-20 xl:mt-44 xl:py-26">
            <div className="container mx-auto max-w-6xl">
              <h4 className="font-medium">Focus Areas</h4>
              <ol className="divide-background/20 divide-y text-base [counter-reset:item] sm:text-lg md:mt-4 md:text-[1.35rem] lg:text-[1.75rem] xl:text-xl">
                {project.focusAreas.map((area, idx) => (
                  <li
                    key={idx}
                    className="flex py-4 [counter-increment:item] md:py-6 lg:py-9"
                  >
                    <span className="w-8 shrink-0 before:font-medium before:content-['0'counter(item)] md:w-10 lg:w-12" />
                    <span>{area}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* ##### what made it work ##### */}
        {project.whatMadeItWork && (
          <div className="container mx-auto mt-18 max-w-6xl xl:mt-44">
            <h4 className="font-medium">What Made It Work</h4>
            <p className="pt-2 pb-6 text-base sm:text-lg md:text-xl lg:pt-3 lg:text-3xl xl:text-xl">
              These key decisions drove user adoption and business growth.
            </p>
            <ol className="divide-foreground/10 divide-y text-base [counter-reset:item] sm:text-lg md:text-[1.35rem] lg:text-[1.75rem] xl:text-xl">
              {project.whatMadeItWork.map((item, idx) => (
                <li
                  key={idx}
                  className="flex py-4 [counter-increment:item] md:py-6 lg:py-9"
                >
                  <span className="w-8 shrink-0 before:font-medium before:content-['0'counter(item)] md:w-10 lg:w-12" />
                  <span>
                    <b>{item.title}</b> <br /> {item.text}
                    <p className="text-foreground/60 pt-1">{item.result}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="container mx-auto mt-14 h-fit w-fit pl-1 xl:mt-20">
          <LinkButton
            text="Go back"
            link={`/projects/#${project.id}`}
            icon={<ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />}
            prefixIcon={true}
          />
        </div>
      </div>
    </section>
  );
}
