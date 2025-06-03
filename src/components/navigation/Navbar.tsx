import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants } from "../animations/motionVariants";
import { openAnimation } from "../animations/openAnimation";
import StackNavItem from "./StackNavItem";
import NavItem from "./NavItem";

const navigation = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed flex justify-center z-50 p-5 w-full">
      <div className="bg-blur py-4 px-8 rounded-xl w-full max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="uppercase font-semibold tracking-wider text-gray-300">
            Monwar
          </div>

          <div>
            <div className="lg:flex space-x-5 hidden">
              {navigation.map((item) => (
                <NavItem key={item}>{item}</NavItem>
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
              <StackNavItem key={item}>{item}</StackNavItem>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
