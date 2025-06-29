'use client';

import React, { use } from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"
import styles from "./hero.module.scss"
import { useMaskCursor } from "@utils/useMaskCursor";

interface Props {
    childReal: React.ReactNode;
    childIdeal: React.ReactNode;
}

export const HeroIntroduction = (props: Props) => {
    const [isHover, setIsHover] = useState<Boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { x, y } = useMaskCursor(containerRef);
    const { childReal, childIdeal } = props

    const size = isHover ? 400 : 0;

    useEffect(() => {
        console.log("pos:", x, y);
    }, [x, y])

    return (
        <div 
        ref={containerRef}
        className="p-8 items-center flex justify-center relative"
        >
            <motion.div
                className={styles.mask}
                animate={{
                    maskPosition: `${x - size/2}px ${y - size/2}px`,
                    maskSize: `${size}px`,
                }}
                transition={{type: "tween", ease:"backOut"}}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {childReal}
            </motion.div>

            <div className="size-full abosolute top-0 left-0 flex items-center justify-center">
                {childIdeal}
            </div>
        </div>
    );
};
