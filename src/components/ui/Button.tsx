import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <button className={cn(" bg-spotlight hover:scale-105")}>{children}</button>
  );
};
