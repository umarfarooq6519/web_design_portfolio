"use client";
import { ProjectType } from "@/app/utils/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      id={project.id.toString()}
      href={`/projects/${project.id}`}
      className={`project-card flex cursor-pointer flex-col gap-6 py-12`}
    >
      <div className="content flex flex-col gap-1">
        <h3 className="font-semibold drop-shadow">{project.title}</h3>
        <p className="pl-1 text-lg font-normal">{project.description}</p>
      </div>

      <Image
        src={project.landscapeImg}
        alt={`${project.title} thumbnail`}
        width={800}
        height={500}
        className="h-auto max-w-full object-cover shadow"
      />

      <ul>
        {project.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </Link>
  );
};

export default ProjectCard;
