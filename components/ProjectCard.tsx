"use client";
import { ProjectType } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      id={project.id.toString()}
      href={`/projects/${project.id}`}
      className={`project-card flex cursor-pointer flex-col gap-6 py-12 md:gap-8 md:py-16 xl:flex-row xl:gap-4 xl:py-28`}
    >
      <div className="content flex w-full flex-col xl:max-w-xs xl:justify-between xl:py-1">
        <span>
          <h3 className="font-semibold drop-shadow">{project.title}</h3>
          <p className="pt-1 pl-1 text-lg font-normal sm:text-xl md:pt-2 md:text-[1.65rem] lg:pt-4 lg:text-3xl xl:text-2xl">
            {project.description}
          </p>
        </span>

        {/* only visible after laptop breakpoint  */}
        <ul className="text-base max-xl:hidden sm:text-lg md:text-2xl lg:text-3xl xl:text-xl">
          {project.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>

      <div className="relative h-[280px] w-full sm:h-[380px] md:h-[480px] lg:h-[580px]">
        <Image
          src={project.landscapeImg}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover shadow"
        />
      </div>

      {/* only visible till laptop breakpoint  */}
      <ul className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:hidden">
        {project.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </Link>
  );
};

export default ProjectCard;
