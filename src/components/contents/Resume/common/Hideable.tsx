"use client";

import { useState, useTransition } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

export const Hideable = ({ children }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={cn(
        hidden && "text-gray-300 print:hidden",
        "cursor-pointer select-none",
      )}
      onClick={(e) => {
        e.stopPropagation();
        startTransition(() => setHidden(!hidden));
      }}
    >
      <span>{isPending ? <HideableFallback /> : children}</span>
    </div>
  );
};

export const HideableFallback = () => <Skeleton className="h-4 w-full" />;
