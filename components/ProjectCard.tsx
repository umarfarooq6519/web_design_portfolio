"use client";
import { ProjectType } from "@/app/utils/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      href={"#"}
      className={`project-card flex cursor-pointer flex-col gap-6 py-12`}
    >
      <div className="content flex flex-col gap-1">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-lg font-normal pl-1">{project.description}</p>
      </div>

        <Image
          src={project.imageUrl}
          alt={`${project.title} thumbnail`}
          width={800}
          height={500}
          className="h-auto max-w-full shadow-md object-cover"
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
