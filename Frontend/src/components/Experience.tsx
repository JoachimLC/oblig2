export type ExperienceProps = {
  description?: string;
};

export default function Experience({ description }: ExperienceProps) {
  return <p className="grid-article-item">{description}</p>;
}
