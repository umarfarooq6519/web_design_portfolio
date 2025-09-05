import LinkButton from "@/components/LinkButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactSection from "./pages/Contact";

export default function Home() {
  return (
    <main className="container flex h-full flex-col gap-26">
      <section
        id="hero"
        className="flex h-[90vh] flex-col items-start justify-center gap-4"
      >
        {/* <Navbar /> */}

        <div className="hero-content grow">
          <div className="flex h-full flex-col justify-center">
            <h4 className="text-foreground/60 text-2xl">Hey, I'm Umar,</h4>
            <span className="uppercase">
              <h1 className="text-5xl">@ Creative</h1>
              <h1 className="text-6xl font-semibold">Website</h1>
              <h1 className="text-6xl font-semibold">Designer</h1>
            </span>

            <span className="mt-4 flex items-center gap-1.5">
              <span className="mt-0.5 rounded-full bg-green-400 p-1.5"></span>
              <h4 className="italic">open to work</h4>
            </span>
          </div>
        </div>

        <div className="hero-wrapper flex w-full justify-end">
          <span className="max-w-3xs text-end font-medium">
            <h6 className="text-lg">
              I create brands, design websites & shape digital products.
            </h6>
          </span>
        </div>
      </section>

      <section id="mini-about" className="flex flex-col">
        <div className="flex items-start justify-between">
          <Image src={"/arrow-long-down.svg"} alt=">" width={70} height={70} />

          <span className="flex max-w-2xs flex-col gap-12">
            <h1 className="text-3xl leading-9">
              My expertise is crafting intuitive experiences & scalable design
              systems that are as beautiful as they are functional.
            </h1>
            <LinkButton link="#" text="About" />
          </span>
        </div>
      </section>

      <ProjectShowcase />
      {/* <ContactSection /> */}
    </main>
  );
}

const ProjectShowcase = () => {
  const projects = [
    {
      id: 0,
      title: "Rooftop Gardens",
      description:
        "🌿 A business website showcasing their amazing landscaping services",
      imageUrl: "/images/rooftop/thumbnail.png",
      roles: ["UX/UI Design", "Framer + CMS"],
      year: 2025,
    },
  ];

  return (
    <section
      id="projects-showcase"
      className="divide-foreground/10 flex flex-col divide-y"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card flex flex-col gap-6 pt-16"
        >
          <div className="content flex flex-col gap-1">
            <h4 className="text-2xl font-semibold">{project.title}</h4>
            <h5 className="text-lg font-normal">{project.description}</h5>
          </div>

          <Image
            className="border"
            src={project.imageUrl}
            alt={`${project.title} thumbnail`}
            width={400}
            height={400}
          />

          <ul>
            {project.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>

          <b className="font-semibold">Case Study {project.year}</b>
        </div>
      ))}
    </section>
  );
};
