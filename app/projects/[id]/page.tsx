import { projects } from "@/app/utils/projects";
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
      <div className="main h-[90vh]">
        <div className="content pt-32">
          <h1 className="h-full text-start text-6xl drop-shadow">
            {project.title}
          </h1>

          {project.portraitImg && (
            <div className="wrapper relative flex w-full justify-end">
              <Image
                className="relative -mt-4 -mr-4 rounded object-cover shadow-md"
                src={project.portraitImg}
                alt={`${project.title} portrait`}
                width={200}
                height={500}
              />
            </div>
          )}
        </div>

        <div className="relative -mt-12 flex flex-col gap-4 pl-1 text-xl">
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

      <div className="content mt-20">
        <div className="-mx-4 h-fit w-fit">
          <Image
            src={project.landscapeImg}
            alt={`${project.title} landscape`}
            width={800}
            height={500}
            className="h-auto max-w-full object-cover"
          />
        </div>

        {/* ##### overview ##### */}
        <div className="pt-14">
          <h4>Overview</h4>
          <h3 className="pt-2">{project.description}</h3>
          {project.problem && <p className="pt-8">{project.problem}</p>}
        </div>

        {/* ##### solution ##### */}
        {project.solution && (
          <div className="pt-10">
            <h4 className="font-medium">Solution</h4>
            <p className="pt-2">{project.solution}</p>
          </div>
        )}

        {/* ##### focus areas ##### */}
        {project.focusAreas && (
          <div className="focus-areas bg-foreground text-background -mx-4 mt-18 px-5 py-8">
            <h4 className="font-medium">Focus Areas</h4>
            <ol className="divide-background/20 divide-y [counter-reset:item]">
              {project.focusAreas.map((area, idx) => (
                <li key={idx} className="flex py-4 [counter-increment:item]">
                  <span className="w-8 shrink-0 before:font-medium before:content-['0'counter(item)]" />
                  <span>{area}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ##### what made it work ##### */}
        {project.whatMadeItWork && (
          <div className="mt-18">
            <h4 className="font-medium">What Made It Work</h4>
            <p className="pt-2 pb-6">
              These key decisions drove user adoption and business growth.
            </p>
            <ol className="divide-foreground/10 divide-y [counter-reset:item]">
              {project.whatMadeItWork.map((item, idx) => (
                <li key={idx} className="flex py-4 [counter-increment:item]">
                  <span className="w-8 shrink-0 before:font-medium before:content-['0'counter(item)]" />
                  <span>
                    <b>{item.title}</b> <br /> {item.text}
                    <p className="text-foreground/60 pt-1">{item.result}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-14 h-fit w-fit pl-1">
          <LinkButton
            text="Go back"
            link={`/projects/#${project.id}`}
            icon={<ArrowLeft />}
            prefixIcon={true}
          />
        </div>
      </div>
    </section>
  );
}
