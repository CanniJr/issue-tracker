import Link from "next/link";
import React from "react";
import { BsBugFill } from "react-icons/bs";

const NavBar = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {Links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link className="text-slate-500 hover:text-slate-800" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
