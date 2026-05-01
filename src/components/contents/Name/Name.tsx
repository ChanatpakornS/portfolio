import { TypeAnimation } from "react-type-animation";
import { cn } from "src/lib/utils";

export const Name = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center text-center min-w-[300px] min-h-[60px] md:min-w-[500px] md:min-h-[84px] lg:min-w-[650px] lg:min-h-[112px]">
        <TypeAnimation
          sequence={["CSAP", 2000, "Aungpao", 2000, "Chanatpakorn", 2000]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          cursor={false}
          preRenderFirstString
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight border-r-4 inline-block animate-blink-cursor",
          )}
        />
      </div>
    </div>
  );
};
