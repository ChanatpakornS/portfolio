import { useEffect, useState } from "react";
import { cn } from "src/lib/utils";
import styles from "./name.module.scss";

export const Name = () => {
  const myName = ["CSAP", "Aungpao", "Chanatpakorn"];
  const [name, setName] = useState(myName[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(() => {
        const newIndex = (index + 1) % myName.length;
        setName(myName[newIndex]);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [myName]);

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 text-4xl gap-4">
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzcwN3BtNXg2Yzh0dGxhc3A3dzBzZG4wZTVwYWFkcmt4eHNiMm9iciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OkoScrMcY324r1j1HZ/giphy.gif"
        alt="dancing"
        loading="eager"
      />
      <p className="-translate-y-5">✨It's me!✨</p>
      <p
        className={cn(
          "border-r-2 border-r-black  bg-spotlight p-4 text-white font-bold text-4xl",
          styles.blinkingCursor,
        )}
      >
        {name}
      </p>
    </div>
  );
};
