import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  ref: React.RefObject<any>;
  activeSection: boolean;
}

export default function NavItem({ children, ref, activeSection }: Props) {
  return (
    <div
      onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
      className={classNames(
        "cursor-pointer uppercase font-semibold text-center",
        {
          "text-gray-300 hover:text-gray-300": activeSection,
          "hover:bg-gray-950 hover:text-gray-400 text-gray-600": !activeSection,
        }
      )}
    >
      {children}
    </div>
  );
}
