"use client";

import { AboutIntroduction } from "./AboutIntro";
import { AboutGoalDataIdeal, AboutGoalDataReal } from "./data/about-goal";
import { AboutMeDataIdeal, AboutMeDataReal } from "./data/about-me";
import {
    AboutProjectDataIdeal,
    AboutProjectDataReal,
} from "./data/about-project";
import { AboutStackDataIdeal, AboutStackDataReal } from "./data/about-stack";

export const About = () => {
    return (
        <>
            <h2 className="p-2 inline-flex justify-start">
                Hover Spotlight Card
            </h2>
            <div className="grid grid-cols-1 w-full h-full md:grid-cols-3 text-black border border-gray-300 ">
                <AboutIntroduction
                    childReal={<AboutMeDataReal />}
                    childIdeal={<AboutMeDataIdeal />}
                />
                <AboutIntroduction
                    childReal={<AboutGoalDataReal />}
                    childIdeal={<AboutGoalDataIdeal />}
                />
                <AboutIntroduction
                    childReal={<AboutProjectDataReal />}
                    childIdeal={<AboutProjectDataIdeal />}
                />
                <div className="col-span-1 md:col-span-3 flex items-center justify-center w-full h-full">
                    <AboutIntroduction
                        childReal={<AboutStackDataReal />}
                        childIdeal={<AboutStackDataIdeal />}
                    />
                </div>
            </div>
        </>
    );
};
