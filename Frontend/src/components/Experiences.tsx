import Experience from "./Experience";
import { ExperienceProps } from "./Types";
import { ExperiencesProps } from "./Types";

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section >
    {experiences.length === 0 ? (
      <h2>Ingen erfaringer</h2>
    ) : (
      <ul className="Experience-grid-articles">
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience description={experience.description} />
          </li>
        ))}
      </ul>
    )}
  </section>
);
}