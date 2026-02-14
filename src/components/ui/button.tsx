import { cn } from "@/lib/utils";
import type React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "bg-spotlight hover:scale-105 rounded-2xl text-xl p-2 text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
