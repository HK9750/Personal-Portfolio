import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Links, Socials } from "../../utils/data";

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full py-4 px-4 bg-bg-2 lg:px-6 justify-between items-center">
      <div className="flex gap-2 lg:gap-3 items-center cursor-pointer hover:scale-105 transition-transform duration-300">
        <h1 className="text-brand-1">&lt;C/&gt;</h1>
        <h1>Hasnain Khan</h1>
      </div>

      <div className="hidden lg:flex gap-5">
        {Links.map(({ href, name }, index) => (
          <Link href={href} key={index} className="menu-m hover:text-brand-2">
            {name}
          </Link>
        ))}
      </div>

      <div className="flex gap-3 lg:gap-5">
        {Socials.map(({ href, logo, name }, index) => (
          <Link
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 lg:gap-2"
          >
            <Image src={logo} alt={name} width={20} height={20} />
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
