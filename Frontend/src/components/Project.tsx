
export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function Project({ id, title, description, technologies, link }: ProjectProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Teknologier: {technologies.join(', ')}
      </p>
      <a href={link}>Link til prosjekt</a>
    </div>
  );
}
