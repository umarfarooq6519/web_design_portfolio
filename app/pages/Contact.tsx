import { ArrowUpRight } from "@/public/ArrowUpRight";
import { socials } from "../utils/socials";
import { currentyear } from "../utils/date";

const ContactSection = () => (
  <section
    id="contact-section"
    className="bg-foreground text-background mt-26 flex flex-col gap-8 rounded-lg px-6 py-8"
  >
    <h2 className="text-4xl font-medium">Get in Touch!</h2>
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

export default ContactSection;
