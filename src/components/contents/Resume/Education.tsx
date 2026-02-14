import { Topic } from "./common/Topic";

interface Props {
  education: any[];
}

interface ItemProps {
  academic: string;
  degree: string;
  GPA: string;
  endYear: string;
}

export const Education = ({ education }: Props) => {
  return (
    <div>
      <Topic title="Education" />
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <EducationItem
              academic={item.academic}
              degree={item.degree}
              GPA={item.GPA}
              endYear={item.endYear}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const EducationItem = ({ academic, degree, GPA, endYear }: ItemProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="font-bold italic">{academic}</h4>
        <p className="font-bold">{endYear}</p>
      </div>
      <div>
        <p>
          {degree}, <span>({GPA})</span>
        </p>
      </div>
    </div>
  );
};
