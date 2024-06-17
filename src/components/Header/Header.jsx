import "../../styles/index.css";

import { GoPeople } from "react-icons/go";
import { MdLaptop } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { GoHome } from "react-icons/go";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { blur, vars } from "../../styles/animation";

const Icons = [
  { title: "home", icon: <GoHome />, href: "/" },
  { title: "about", icon: <GoPeople />, href: "/about" },
  { title: "work", icon: <MdLaptop />, href: "/work" },
  { title: "experience", icon: <BsLightningCharge />, href: "/experience" },
  { title: "contact", icon: <BsEnvelope />, href: "/contact" },
];

export default function Header() {
  const [selectedPortfolio, setSelectedPortfolio] = useState({
    isActive: false,
    index: 0,
  });

  const [active, setActive] = useState({
    isActive: true,
    index: 0,
  });

  const path = document.location.pathname;
  console.log(path);

  return (
    <header className="hidden md:block">
      <nav className="h-full flex justify-center items-center">
        <ul className="nav_menu flex flex-col gap-3">
          {Icons.map((icon, index) => (
            <motion.li key={index} className="relative">
              <motion.span
                variants={blur}
                initial="initial"
                animate={
                  selectedPortfolio.isActive &&
                  selectedPortfolio.index === index
                    ? "open"
                    : "reveal"
                }
                className="absolute before:content-[''] before:w-1.5 before:h-1.5 rounded-md before:bg-white before:absolute before:top-3 before:rotate-45 before:-left-0.5 bg-white px-3 h-7 text-base top- text-black left-10"
              >
                {icon.title}
              </motion.span>
              <motion.a
                onMouseOver={() =>
                  setSelectedPortfolio({ isActive: true, index })
                }
                onMouseLeave={() =>
                  setSelectedPortfolio({ isActive: false, index })
                }
                href={icon.href}
                className={`inline-block ${
                  path !== icon.href ? "icon_hover" : "icon_default"
                }`}
              >
                {icon.icon}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
