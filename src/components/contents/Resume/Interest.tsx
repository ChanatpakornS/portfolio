import { Hideable } from "./common/Hideable";
import { Topic } from "./common/Topic";

interface Props {
  interests: string[];
}

export const Interest = ({ interests }: Props) => (
  <Hideable>
    <Topic title="Interests" />
    <p>{interests.join(", ")}</p>
  </Hideable>
);
