"use client";
import { ProjectType } from "@/utils/projects";
import { motion } from "motion/react";
import { standardInViewFade } from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="py-12 md:py-16 xl:py-28">
      <Link
        id={project.id.toString()}
        href={`/projects/${project.id}`}
        className={`project-card flex cursor-pointer flex-col gap-6 md:gap-8 xl:flex-row xl:gap-4`}
      >
        <div className="content flex w-full flex-col xl:max-w-sm xl:justify-between xl:py-1">
          <motion.span
            initial={standardInViewFade.initial}
            whileInView={standardInViewFade.whileInView}
            viewport={standardInViewFade.viewport}
            transition={standardInViewFade.transition}
          >
            <div className="overflow-hidden pb-1 md:pb-2 lg:pb-3">
              <h3 className="font-semibold drop-shadow">{project.title}</h3>
            </div>
            <p className="pl-1 text-lg font-normal sm:text-xl md:text-[1.65rem] lg:text-3xl xl:text-xl">
              {project.description}
            </p>
          </motion.span>

          {/* only visible after laptop breakpoint  */}
          <motion.ul
            initial={standardInViewFade.initial}
            whileInView={standardInViewFade.whileInView}
            viewport={standardInViewFade.viewport}
            transition={standardInViewFade.transition}
            className="text-base max-xl:hidden sm:text-lg md:text-2xl lg:text-3xl xl:text-xl"
          >
            {project.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{
            clipPath: "inset(0 0 100% 0)", // fully hidden from top
          }}
          whileInView={{
            clipPath: "inset(0 0 0% 0)", // fully revealed
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative h-[280px] w-full overflow-hidden sm:h-[380px] md:h-[480px] lg:h-[580px]"
        >
          <Image
            src={project.landscapeImg}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover shadow"
          />
        </motion.div>

        {/* only visible till laptop breakpoint  */}
        <motion.ul
          initial={standardInViewFade.initial}
          whileInView={standardInViewFade.whileInView}
          viewport={standardInViewFade.viewport}
          transition={standardInViewFade.transition}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:hidden"
        >
          {project.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </motion.ul>
      </Link>
    </div>
  );
};

export default ProjectCard;
