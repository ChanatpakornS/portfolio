'use client';

import { HeroIntroduction } from "./Hero-intro"
import { AboutGoalDataIdeal, AboutGoalDataReal } from "./data/about-goal";
import { AboutMeDataIdeal, AboutMeDataReal } from "./data/about-me";
import { AboutProjectDataIdeal, AboutProjectDataReal } from "./data/about-project";
import { AboutStackDataIdeal, AboutStackDataReal } from "./data/about-stack";

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
            <div className="col-span-1 md:col-span-3 flex items-center justify-center w-full h-full">
                <HeroIntroduction
                childReal={<AboutStackDataReal />}
                childIdeal={<AboutStackDataIdeal />}
                />
            </div>
        </div>
    );
}
