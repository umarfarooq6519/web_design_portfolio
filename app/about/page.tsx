import LinkButton from "@/components/LinkButton";
import { ArrowUpRight } from "@/public/ArrowUpRight";
import Image from "next/image";
import { experiences } from "../utils/experiences";

export default function About() {
  return (
    <section id="about-section" className="h-full min-h-screen">
      <div className="main h-[90vh]">
        <div className="content pt-32">
          <h1 className="h-full text-center text-7xl">About</h1>
        </div>
        <div className="wrapper relative overflow-visible">
          <Image
            className="-mt-4 -ml-14 rounded-lg"
            src={"/images/profile.JPEG"}
            alt="profile"
            width={260}
            height={500}
          />
        </div>
      </div>

      <div className="expertise bg-foreground text-background -mx-4 flex h-screen items-center justify-center p-4">
        <div className="content flex flex-col gap-10">
          <div className="skills">
            <h1 className="text-5xl">Art</h1>
            <h1 className="text-5xl">Direction</h1>
            <h1 className="text-5xl">Branding</h1>
            <h1 className="text-5xl">UX/UI</h1>
            <h1 className="text-5xl">Bespoke</h1>
            <h1 className="text-5xl">Visuals</h1>
          </div>

          <div className="content">
            <p className="leading-relaxed">
              I've always had an intuitive sense for art and design -
              understanding what works, what feels aesthetically right, and how
              to combine colors, typography, and structure to create meaningful
              visuals. After pursuing my computer science degree, I decided to
              merge this keen eye for design with my technical skills - a
              combination that allows me to build websites that aren't just
              functional, but truly connect with users on both an emotional and
              practical level, resulting in higher engagement & conversion
              rates.
            </p>
          </div>

          <LinkButton text="Projects" link="#" />
        </div>
      </div>

      <div className="more-about-me mt-32">
        <div className="content">
          <h4>
            I'm Umar, a website designer from{" "}
            <span className="text-green-700">Pakistan</span> with a computer
            science degree <i>+</i> over four years of experience in crafting
            websites that helps business stand out.
          </h4>
        </div>
        <div className="wrapper text-foreground/60 flex justify-end pt-2 pr-4">
          <h6 className="font-normal">
            * Experience & <br /> Education
          </h6>
        </div>
      </div>

      <div className="experience mt-20">
        <ul className="divide-y pt-6 text-xl">
          {experiences.map((experience, index) => (
            <li key={index} className="py-4">
              <a
                className="flex w-full items-center justify-between"
                href={experience.link}
                target="_blank"
              >
                <span className="flex flex-col">
                  <h5>{experience.name}</h5>
                  <p className="text-foreground/50 pr-1 text-base">
                    {experience.from} {experience.to && "-"} {experience.to}
                  </p>
                </span>
                <ArrowUpRight width={1.5} size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
