"use client";

import { useMaskCursor } from "@utils/useMaskCursor";
import React, { useRef, useState } from "react";
import spotlightSvg from "@assets/spotlight.svg";

interface Props {
    childReal: React.ReactNode;
    childIdeal: React.ReactNode;
}

export const AboutIntroduction = (props: Props) => {
    const [isHover, setIsHover] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { x, y } = useMaskCursor(containerRef);
    const { childReal, childIdeal } = props;

    const size = isHover ? 500 : 0;

    return (
        <div
            ref={containerRef}
            className="p-4 relative size-full"
        >
            <div
                className="absolute inset-0 w-full h-full bg-[#ffc78f] text-black p-8 mask-no-repeat"
                style={{
                    maskImage: `url(${spotlightSvg.src})`,
                    WebkitMaskImage: `url(${spotlightSvg.src})`,
                    maskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    maskSize: `${size}px`,
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {childReal}
            </div>

            <div className="size-full pb-8">
                {childIdeal}
            </div>
        </div>
    );
};
