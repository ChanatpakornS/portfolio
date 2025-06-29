'use client';

import { HeroIntroduction } from "./Hero-intro"
import { AboutGoalDataIdeal, AboutGoalDataReal } from "./data/about-goal";
import { AboutMeDataIdeal, AboutMeDataReal } from "./data/about-me";
import { AboutProjectDataIdeal, AboutProjectDataReal } from "./data/about-project";

export const Hero = () => {
    return (
        <div className="grid grid-cols-1 w-full h-full md:grid-cols-3 text-black border border-gray-300 ">
            <HeroIntroduction
            childReal={<AboutMeDataReal />}
            childIdeal={<AboutMeDataIdeal />}
            />
            <HeroIntroduction
            childReal={<AboutGoalDataReal />}
            childIdeal={<AboutGoalDataIdeal />}
            />
            <HeroIntroduction
            childReal={<AboutProjectDataReal />}
            childIdeal={<AboutProjectDataIdeal />}
            />
        </div>
    );
}
