'use client';

import { HeroIntroduction } from "./Hero-intro"
import { Test } from "./data/Test"

export const Hero = () => {
    return (
        <div className="grid grid-cols-1 w-full h-full md:grid-cols-3 text-black">
            <HeroIntroduction
                childReal={<Test />}
                childIdeal={<Test />}
            />
            <HeroIntroduction
                childReal={<Test />}
                childIdeal={<Test />}
            />
            <HeroIntroduction
                childReal={<Test />}
                childIdeal={<Test />}
            />
        </div>
    );
}
