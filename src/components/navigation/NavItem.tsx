import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function NavItem({ children }: Props) {
  return (
    <div className="hover:bg-gray-950 hover:text-gray-400 cursor-pointer text-gray-600 uppercase font-semibold text-center">
      {children}
    </div>
  );
}
