import React from "react";
import { Icon02 } from "./icons/Icon02";
import { IconArrow } from "./icons/IconArrow";

interface ButtonProps {
  title: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
}

export function Button({ icon1, icon2, title }: ButtonProps) {
  return (
    <button className="w-[608px] h-24 border border-gray04 rounded-2xl bg-gray06 p-4 flex items-center justify-between hover:bg-gray07">
      <div className="flex items-center">
        {icon1}
        <span className="text-[18px] text-gray02 font-semibold ml-6">
          {title}
        </span>
      </div>
      {icon2}
    </button>
  );
}
