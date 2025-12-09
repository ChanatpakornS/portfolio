import type { ImageMetadata } from "astro";

import ChatGPT from "@assets/chatGPT.svg";
import GitHubCopilot from "@assets/githubCopilot.svg";
import Gemini from "@assets/gemini.svg";
import Claude from "@assets/claude.svg";

export const AboutStackDataIdeal = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                About Stacks ⚙️
            </h1>
            <div className="flex items-center justify-center gap-4">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg"
                    height={48}
                    width={48}
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    height={48}
                    width={48}
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    height={48}
                    width={48}
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    height={48}
                    width={48}
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                    height={48}
                    width={48}
                />
            </div>
        </div>
    );
};

export const AboutStackDataReal = () => {
    const stacks: { image: ImageMetadata; alt: string }[] = [
        { image: ChatGPT, alt: "ChatGPT" },
        { image: GitHubCopilot, alt: "GitHub Copilot" },
        { image: Gemini, alt: "Gemini" },
        { image: Claude, alt: "Claude" },
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">
                About Stacks 🤖
            </h1>
            <div className="flex items-center justify-center">
                {stacks.map((stack, index) => (
                    <img
                        key={index}
                        src={stack.image.src}
                        alt={stack.alt}
                        className="w-10 h-10 mx-2"
                    />
                ))}
            </div>
        </div>
    );
};
