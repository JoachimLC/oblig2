import Experience from "./Experience";

type ExperienceItem = {
  name: string;
};

type ExperiencesProps = {
  experiences: ExperienceItem[];
};

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section>
    {experiences.length === 0 ? (
      <h2 className="warning">Ingen erfaringer</h2>
    ) : (
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience description={experience.name} />
          </li>
        ))}
      </ul>
    )}
  </section>
);
}