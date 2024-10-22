import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Links, Socials } from "../../utils/data";

const Navbar = () => {
  return (
    <nav className="flex w-full py-2 px-4 justify-between items-center">
      <div className="flex gap-3 logo-m items-center cursor-pointer hover:scale-105 transition-transform duration-300">
        <h1 className="text-brand-1 transition-colors duration-300">
          &lt;C/&gt;
        </h1>
        <h1 className="transition-colors duration-300">Hasnain Khan</h1>
      </div>

      <div className="flex gap-5 flex-grow justify-center">
        {Links.map(({ href, name }, index) => (
          <Link href={href} key={index} className="menu-m hover:text-brand-2">
            {name}
          </Link>
        ))}
      </div>

      <div className="flex gap-5">
        {Socials.map(({ href, logo, name }, index) => (
          <Link
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 media-m"
          >
            <Image src={logo} alt={name} />
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
