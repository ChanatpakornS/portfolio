import { useState, useEffect } from "react";
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
        <div className="flex items-center justify-center w-full py-18">
                <p className="text-2xl md:text-3xl">👋 Hello, I am <span className={`border-r-2 border-r-black mr-4 bg-amber-500 p-4 text-white font-bold ${styles.blinkingCursor}`}>{name}</span>!</p>
        </div>
    );
}