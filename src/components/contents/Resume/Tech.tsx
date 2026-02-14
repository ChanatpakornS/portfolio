import { Hideable } from "./common/Hideable";
import { Topic } from "./common/Topic";

interface Props {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export const Tech = ({ languages, frameworks, tools }: Props) => (
  <Hideable>
    <Topic title="Tech Stack" />
    <ul>
      <Hideable>
        <li>
          <strong className="md:w-32 w-28 inline-block">Languages:</strong>{" "}
          {languages.join(", ")}{" "}
        </li>
      </Hideable>

      <li>
        <strong className="md:w-32 w-28 inline-block">Frameworks:</strong>{" "}
        {frameworks.join(", ")}{" "}
      </li>
      <li>
        <strong className="md:w-32 w-28 inline-block">Tools:</strong>{" "}
        {tools.join(", ")}{" "}
      </li>
    </ul>
  </Hideable>
);
