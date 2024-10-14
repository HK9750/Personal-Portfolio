import Link from "next/link";
import React from "react";
import Input from "../Input";

const Navbar = () => {
  return (
    <nav className="flex w-full">
      <div className="flex gap-2 w-1/2">
        <span>&lt;C/&gt;</span>
        <h1>Hasnain Mubarak</h1>
      </div>
      <div className="w-1/2 flex">
        <div className="flex gap-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Skills</Link>
          <Link href={"/"}>Projects</Link>
          <Link href={"/"}>Contact</Link>
        </div>

        <Input />
      </div>
    </nav>
  );
};
export default Navbar;
