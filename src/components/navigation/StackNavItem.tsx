import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function StackNavItem({ children }: Props) {
  return (
    <div className="hover:bg-gray-950/20 roudned-2xl hover:text-gray-300 py-4 cursor-pointer text-gray-600 uppercase font-semibold tracking-widest">
      {children}
    </div>
  );
}
