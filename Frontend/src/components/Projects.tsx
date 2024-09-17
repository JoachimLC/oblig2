import Project from "./Project";


export type ProjectsProps = {
    projects: {
        id: number;
        title: string;
        description: string;
        technologies: string;
        link: string}[];
  };
  export default function Projects({ projects }: ProjectsProps) {
    return (
      <section className="grid-articles">
        {projects.length === 0 ? (
          <h2 className="warning">Ingen prosjekter</h2>
        ) : (
          projects.map((project) => (
            <article className="grid-article-item" key={project.id}>
              <Project
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            </article>
          ))
        )}
      </section>
    );
  }
  