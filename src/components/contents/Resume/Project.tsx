import { Topic } from "./common/Topic";
import { Hideable } from "./common/Hideable";

interface Props {
  projects: any[];
}
interface ItemProps {
  name: string;
  url?: string;
  description: string[];
}

export const Projects = ({ projects }: Props) => (
  <div>
    <Topic title="Projects" />
    {projects.map((project, index) => (
      <ProjectItem key={index} {...project} client:load />
    ))}
  </div>
);

const ProjectItem = ({ name, url, description }: ItemProps) => {
  return (
    <Hideable>
      <div className="flex font-bold print:mb-1">
        <a
          className="flex-1 text-left"
          href={url || "#"}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
      <ul className="text-left list-disc pl-8 print:pl-6">
        {description.map((detail, index) => (
          <Hideable key={index}>
            <li>{detail}</li>
          </Hideable>
        ))}
      </ul>
    </Hideable>
  );
};
