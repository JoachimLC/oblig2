import Project from "./Project";
import { ProjectsProps } from "./Types";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2 className="projects-title">Oversikt over prosjekter</h2>
      <div className="grid-articles">
        {projects.length === 0 ? (
          <h2>Ingen prosjekter</h2>
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
      </div>
    </section>
  );
}
