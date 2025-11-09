"use client";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import { currentyear } from "@/utils/date";
import { socials } from "@/utils/socials";
import { screens } from "@/utils/screens";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross } from "@/public/Cross";
import { Menu } from "@/public/Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Whenever the path changes, close menu
    setIsMenuOpen(false);
  }, [pathName]);

  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className={` ${isMenuOpen ? "text-background" : "text-foreground"} logo z-50 cursor-pointer text-lg uppercase`}
        >
          <h6>
            Umar <span className="font-normal">Farooq</span>
          </h6>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative z-50 h-9 w-9 cursor-pointer text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu
            className={`text-foreground absolute inset-0 h-9 w-9 md:h-10 md:w-10 lg:-inset-3 lg:h-14 lg:w-14 xl:h-9 xl:w-9 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <Cross
            className={`text-background absolute inset-0 h-9 w-9 md:h-10 md:w-10 lg:-inset-3 lg:h-14 lg:w-14 xl:h-9 xl:w-9 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="bg-opacity-95 bg-foreground fixed inset-0 z-20 p-4 md:p-8 lg:p-10">
          <div className="container mx-auto flex h-full items-start justify-center max-xl:mt-20 max-xl:flex-col">
            <div className="text-background flex h-full w-full flex-col items-start justify-end space-y-4 xl:justify-center">
              {screens.map((item, index) => (
                <span
                  key={index}
                  className="inline-block w-full cursor-pointer overflow-hidden"
                >
                  <Link href={item.link} className="block">
                    <h1 className="py-1 font-medium">{item.title}</h1>
                  </Link>
                </span>
              ))}
            </div>
            <div className="text-background flex h-full w-full shrink flex-col items-start justify-center space-y-1 text-start font-medium uppercase max-xl:pb-32 md:space-y-3 lg:space-y-5 xl:items-end xl:space-y-2">
              {socials.map((social, index) => (
                <LinkButton key={index} text={social.name} link={social.link} />
              ))}
              <p className="mt-3 text-base font-light italic sm:text-lg md:text-xl lg:text-3xl xl:text-xl">
                © {currentyear}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
