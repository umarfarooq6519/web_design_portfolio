import { currentyear } from "@/utils/date";
import { socials } from "@/utils/socials";
import { ArrowUpRight } from "@/public/ArrowUpRight";

const Footer = () => (
  <section
    id="contact-section"
    className="bg-foreground text-background -mx-4 mt-26 -mb-4 flex flex-col justify-center gap-8 px-6 py-8 sm:-mx-6 sm:-mb-6 sm:py-10 md:mt-32 md:px-8 md:py-14 lg:-mx-10 lg:-mb-10 lg:px-11 lg:py-18 xl:px-26 xl:py-14"
  >
    <div className="container mx-auto w-full">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:leading-16">
          Get in Touch!
        </h2>
        <p className="text-xl md:mt-4 md:text-2xl lg:text-3xl xl:text-2xl">
          Let's discuss your ideas, design and inspiration.
        </p>
      </div>

      <ul className="divide-y py-4 text-3xl md:py-8 md:text-4xl lg:py-10 lg:text-5xl">
        {socials.map((social, index) => (
          <li className="py-4 sm:py-6 md:py-8 lg:py-11" key={index}>
            <a
              className="flex w-full items-center justify-between"
              href={social.link}
              target="_blank"
            >
              {social.name}
              <ArrowUpRight className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-center text-base font-normal italic sm:text-lg md:text-xl lg:text-3xl xl:text-2xl">
        © {currentyear}
      </p>
    </div>
  </section>
);

export default Footer;
