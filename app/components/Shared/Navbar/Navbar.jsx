"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { Link } from "react-scroll/modules";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";
import logo from "../../../../public/logo/Drama-Logo.svg";
const Navbar = () => {
  const [active, setActive] = useState(true);
  const [ham, setHam] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const path = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    if (width > 900) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [width]);

  const handleClick = () => {
    setHam(!ham);
  };
  return (
    <div className={styles.Navbar}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="" fill />
      </Link>
      {active && (
        <div
          className={styles.hamburger}
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          {!ham ? (
            <Icon icon="eva:menu-2-outline" color="white" width="30" />
          ) : (
            <Icon icon="maki:cross" color="white" width="30" />
          )}
        </div>
      )}
      <div
        className={` ${active ? styles.hamLinks : styles.links} ${
          ham ? styles.crossLinks : " "
        }`}
      >
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${path === link.href ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
