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
            <div className="flex items-center justify-center">
                {/*<img src="https://skillicons.dev/icons?i=python,js,java,cpp,go"/>*/}
            </div>
        </div>
    );
};

export const AboutStackDataReal = () => {
    const stacks = [
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
