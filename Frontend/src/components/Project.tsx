export type projectProp = {
  id: number;
  title: string;
  description: string;
  technologies: string;
  link: string
  };
  
  export default function Project({
    title = "Default Title",
    description = "Default Description",
    technologies = "Default Technologies",
    link = "https://default.link",
  }: projectProp) {
    return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Technologies used: {technologies}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Project Link</a>
      </>
      )
  }
