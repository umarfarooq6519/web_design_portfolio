"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import { currentyear } from "@/app/utils/date";
import { socials } from "@/app/utils/socials";
import { screens } from "@/app/utils/screens";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <nav className="flex items-center justify-between">
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
          <Image
            src={"/menu.svg"}
            alt="Menu"
            width={36}
            height={36}
            className={`absolute inset-0 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={"/cross.svg"}
            alt="Close"
            width={36}
            height={36}
            className={`absolute inset-0 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="bg-opacity-95 bg-foreground fixed inset-0 z-20 p-4">
          <div className="mt-20 flex h-full flex-col items-start justify-center">
            <div className="text-background flex h-full w-full flex-col items-start justify-end space-y-4">
              {screens.map((item, index) => (
                <span
                  key={index}
                  className="inline-block w-full cursor-pointer overflow-hidden"
                >
                  <Link href={item.link} className="block">
                    <h1 className="font-medium">{item.title}</h1>
                  </Link>
                </span>
              ))}
            </div>
            <div className="text-background flex h-full w-full shrink flex-col items-start justify-center space-y-3 pb-32 text-start text-xl font-medium uppercase">
              {socials.map((social, index) => (
                <LinkButton key={index} text={social.name} link={social.link} />
              ))}
              <p className="font-light italic">© {currentyear}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
