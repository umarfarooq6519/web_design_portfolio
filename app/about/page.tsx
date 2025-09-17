import LinkButton from "@/components/LinkButton";
import { ArrowUpRight } from "@/public/ArrowUpRight";
import Image from "next/image";
import { experiences } from "../../utils/experiences";

export default function About() {
  return (
    <section id="about-section" className="h-full min-h-screen">
      <div className="main flex h-screen items-center justify-center">
        <div className="content mx-auto w-fit">
          <h1 className="h-full text-center text-7xl drop-shadow sm:text-8xl md:text-[9rem]">
            About
          </h1>
          <div className="wrapper relative -mt-9 -ml-14 h-[320px] w-[240px] overflow-visible sm:h-[340px] sm:w-[280px] md:h-[400px] md:w-[340px] lg:h-[500px] lg:w-[440px] xl:h-[440px] xl:w-[340px]">
            <Image
              className="rounded object-cover shadow-sm"
              src={"/images/profile.JPEG"}
              alt="profile"
              fill
            />
          </div>
        </div>
      </div>

      <div className="expertise bg-foreground text-background -mx-4 flex min-h-screen items-center justify-center px-4 sm:-mx-6 lg:-mx-10 lg:px-10">
        <div className="content container flex w-full gap-10 max-xl:flex-col sm:gap-12 md:gap-14 lg:gap-16 xl:items-end xl:justify-center xl:gap-32 xl:py-44">
          <div className="skills">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              Art
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              Direction
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              Branding
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              UX/UI
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              Bespoke
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-8xl xl:leading-28">
              Visuals
            </h1>
          </div>

          <div className="content xl:max-w-2xl">
            <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-xl">
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
            <div className="mt-10 w-fit sm:mt-12 md:mt-14 lg:mt-16">
              <LinkButton text="Projects" link="/projects" />
            </div>
          </div>
        </div>
      </div>

      <div className="more-about-me container mx-auto mt-32 max-w-4xl sm:mt-36 lg:mt-44 xl:mt-56">
        <div className="content">
          <h4>
            I'm Umar, a website designer from{" "}
            <span className="text-green-700">Pakistan</span> with a computer
            science degree <i>+</i> over four years of experience in crafting
            websites that help businesses stand out.
          </h4>
        </div>
        <div className="wrapper text-foreground/60 flex justify-end pt-2 pr-4">
          <h6 className="font-normal">
            * Experience & <br /> Education
          </h6>
        </div>
      </div>

      <div className="experience mx-auto mt-20 max-w-4xl sm:mt-24 lg:mt-28 xl:mt-36 xl:pb-10">
        <ul className="divide-y pt-6">
          {experiences.map((experience, index) => (
            <li key={index} className="py-4 md:py-6">
              <a
                className="flex w-full items-center justify-between"
                href={experience.link}
                target="_blank"
              >
                <span className="flex flex-col md:gap-1 lg:gap-2 xl:gap-0">
                  <h5>{experience.name}</h5>
                  <p className="text-foreground/50 pl-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl">
                    {experience.from} {experience.to && "-"} {experience.to}
                  </p>
                </span>
                <ArrowUpRight
                  width={1.5}
                  className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-10 xl:w-10"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
