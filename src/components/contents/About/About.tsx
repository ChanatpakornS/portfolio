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
        <div className="grid grid-cols-1 w-full h-full md:grid-cols-3 text-black border border-gray-300 rounded-2xl overflow-hidden [&>*]:border-b [&>*]:border-gray-300 [&>*:last-child]:border-b-0 md:[&>*]:border-r md:[&>*]:border-gray-300 md:[&>*:nth-child(3n)]:border-r-0">
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
            <div className="col-span-1 md:col-span-3">
                <AboutIntroduction
                    childReal={<AboutStackDataReal />}
                    childIdeal={<AboutStackDataIdeal />}
                />
            </div>
        </div>
    );
};
