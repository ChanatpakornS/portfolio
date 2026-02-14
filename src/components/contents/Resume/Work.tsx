import { Topic } from "./common/Topic";
import { Hideable } from "./common/Hideable";

interface Props {
  works: any[];
}
interface ItemProps {
  position: string;
  company: string;
  url: string;
  years: string[];
  details: string[];
}

export const Works = ({ works }: Props) => (
  <div>
    <Topic title="Work Experience" />
    <div className="space-y-2">
      {works.map((work, index) => (
        <WorkItem key={index} {...work} client:load />
      ))}
    </div>
  </div>
);

const WorkItem = ({ position, company, url, years, details }: ItemProps) => {
  return (
    <Hideable>
      <div className="flex font-bold mb-2 print:mb-1">
        <div className="flex-1 text-left">{position}</div>
        <div className="flex-0">
          <a href={url} target="_blank" rel="noreferrer">
            {company}
          </a>
        </div>
        <div className="flex-1 text-right">{years.join("-")}</div>
      </div>
      <ul className="text-left list-disc pl-8 print:pl-6">
        {details.map((detail, index) => (
          <Hideable key={index}>
            <li>{detail}</li>
          </Hideable>
        ))}
      </ul>
    </Hideable>
  );
};
