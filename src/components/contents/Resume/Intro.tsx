interface Props {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  location: string;
  github: string;
  website: string;
  linkedin: string;
}

export const Intro = ({
  name,
  nickname,
  phone,
  email,
  location,
  github,
  website,
  linkedin,
}: Props) => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row print:flex-row text-sm sm:text-base">
      <div className="flex-1 text-left sm:py-4 w-48">
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>{location}</p>
      </div>

      <h2 className="flex-none order-first sm:order-none print:order-none text-4xl sm:text-2xl md:text-3xl lg:text-6xl text-center p-4 print:pt-0">
        {name}
        <span className="block -mt-1 text-base lg:text-lg">({nickname})</span>
      </h2>

      <div className="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base">
        <p>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{github}
          </a>
        </p>
        <p>
          <a href={`https://${website}`} target="_blank" rel="noreferrer">
            {website}
          </a>
        </p>
        <p>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};
