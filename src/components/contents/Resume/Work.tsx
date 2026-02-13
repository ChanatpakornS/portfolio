import { Hideable } from "./Hideable";

interface Props {
  position: string;
  company: string;
  url: string;
  years: string[];
  details: string[];
}

export const Work = ({ position, company, url, years, details }: Props) => {
  return (
    <div className="work-experience">
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
          {details.map((detail) => (
            <Hideable>
              <li>{detail}</li>
            </Hideable>
          ))}
        </ul>
      </Hideable>
    </div>
  );
};
