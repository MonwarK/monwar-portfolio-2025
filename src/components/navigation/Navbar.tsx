import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants } from "../animations/motionVariants";
import { openAnimation } from "../animations/openAnimation";
import StackNavItem from "./StackNavItem";
import NavItem from "./NavItem";

export default function Navbar({ refs, activeSection }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      name: "Home",
      ref: refs.home,
    },
    {
      name: "About",
      ref: refs.about,
    },
    {
      name: "Skills",
      ref: refs.skills,
    },
    {
      name: "Projects",
      ref: refs.projects,
    },
    {
      name: "Contact",
      ref: refs.contact,
    },
  ];

  console.log(refs);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed flex justify-center z-50 p-5 w-full">
      <div className="bg-blur backdrop-blur-sm py-4 px-8 rounded-xl w-full max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="uppercase font-semibold tracking-wider text-gray-300">
            Monwar
          </div>

          <div>
            <div className="lg:flex space-x-5 hidden">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  ref={item.ref}
                  activeSection={activeSection == item.name.toLowerCase()}
                >
                  {item.name}
                </NavItem>
              ))}
            </div>
            <div className="lg:hidden cursor-pointer" onClick={toggleOpen}>
              {!isOpen ? <Menu /> : <X />}
            </div>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial={openAnimation.closed}
          animate={isOpen ? openAnimation.open : openAnimation.closed}
          className="text-center overflow-hidden lg:hidden"
        >
          <div className="pt-10">
            {navigation.map((item) => (
              <StackNavItem
                key={item.name}
                ref={item.ref}
                activeSection={activeSection == item.name.toLowerCase()}
              >
                {item.name}
              </StackNavItem>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
