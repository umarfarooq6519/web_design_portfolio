import { currentyear } from "@/app/utils/date";
import { socials } from "@/app/utils/socials";
import { ArrowUpRight } from "@/public/ArrowUpRight";

const Footer = () => (
  <section
    id="contact-section"
    className="bg-foreground text-background -mx-4 mt-26 -mb-4 flex flex-col gap-8 px-6 py-8"
  >
    <h2 className="text-4xl">Get in Touch!</h2>
    <p className="text-xl">Let's discuss your ideas, design and inspiration.</p>

    <ul className="divide-y text-3xl">
      {socials.map((social, index) => (
        <li className="py-4" key={index}>
          <a
            className="flex w-full items-center justify-between"
            href={social.link}
            target="_blank"
          >
            {social.name}
            <ArrowUpRight size={24} />
          </a>
        </li>
      ))}
    </ul>

    <p className="text-center font-normal italic">© {currentyear}</p>
  </section>
);

export default Footer;
