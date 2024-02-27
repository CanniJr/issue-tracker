"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { BsBugFill } from "react-icons/bs";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
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
            <Link
              className={classnames({
                "text-slate-800": href === currentPath,
                "text-gray-400": href !== currentPath,
                "hover:text-slate-800 transition-colors": true,
              })}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
