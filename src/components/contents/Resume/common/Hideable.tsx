"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export const Hideable = ({ children }: Props) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={cn(
        hidden && "text-gray-300 print:hidden",
        "cursor-pointer select-none",
      )}
      onClick={(e) => {
        e.stopPropagation();
        setHidden(!hidden);
      }}
    >
      <span>{children}</span>
    </div>
  );
};
