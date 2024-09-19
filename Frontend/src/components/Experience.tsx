import { ExperienceProps } from "./Types";

export default function Experience({ description }: ExperienceProps) {
  return <p className="grid-experience-item">{description}</p>;
}
