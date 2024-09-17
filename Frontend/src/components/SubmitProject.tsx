import { useState, type FormEvent } from "react";
import { ProjectsProps } from "./Projects";

type ProjectFormProps = {
  setProjectData: (callback: (prevProjects: any[]) => any[]) => void;
  projects: ProjectsProps['projects'];
};

export default function ContactForm({ setProjectData, projects }: ProjectFormProps) {
  type FormData = {
    id: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");

  const [titleValid, setTitleValid] = useState(false);
  const [titleIsDirty, setTitleIsDirty] = useState(false);
  const [titleIsTouched, setTitleIsTouched] = useState(false);

  const [descriptionValid, setDescriptionValid] = useState(false);
  const [descriptionIsDirty, setDescriptionIsDirty] = useState(false);
  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);

  const validateTitleInput = (title: string) => {
    if (titleIsTouched && titleIsDirty) {
      setTitleValid(title.trim().length > 2);
    }
  };

  const updateTitle = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setTitleIsDirty(true);
    setTitle(input.value);
  };

  const validateDescription = (description: string) => {
    const wordCount = description.trim().split(/\s+/).length;
    setDescriptionValid(wordCount >= 2);
  };

  const updateDescription = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setDescriptionIsDirty(true);
    setDescription(input.value);
    validateDescription(input.value);
  };

  const updateTechnologies = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setTechnologies(input.value);
  };

  const updateLink = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setLink(input.value);
  };

  const addProjectToList = (title: string, description: string, technologies: string, link: string) => {
    const newProject: FormData = {
      id: crypto.randomUUID(),
      title,
      description,
      technologies,
      link,
    };

    setProjectData((prevProjects) => [...prevProjects, newProject]);
  };

  const SubmitWithState = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !descriptionValid) return;

    addProjectToList(title, description, technologies, link);
    console.log(projects[projects.length-1])
    setTitle("");
    setDescription("");
    setTechnologies("");
    setLink("");
    setTitleIsDirty(false);
    setTitleIsTouched(false);
    setTitleValid(false);
    setDescriptionIsDirty(false);
    setDescriptionIsTouched(false);
    setDescriptionValid(false);
  };

  return (
    <section className="formflex">
      <h2>Legg til et nytt prosjekt</h2>
      <form onSubmit={SubmitWithState}>
        <label htmlFor="title">
          <p>Tittel:</p>
          <input
            type="text"
            id="title"
            name="title"
            onChange={updateTitle}
            onFocus={() => setTitleIsTouched(true)}
            onBlur={() => validateTitleInput(title)}
            value={title}
          />
          {!titleValid && titleIsDirty ? <p className="warning">Tittelen må være minst 3 tegn lang</p> : null}
        </label>

        <label htmlFor="description">
          <p>Beskrivelse (må inneholde minst to ord):</p>
          <input
            type="text"
            id="description"
            name="description"
            onChange={updateDescription}
            onFocus={() => setDescriptionIsTouched(true)}
            onBlur={() => validateDescription(description)}
            value={description}
          />
          {!descriptionValid && descriptionIsDirty && descriptionIsTouched ? (
            <p className="warning">Beskrivelsen må inneholde minst to ord</p>
          ) : null}
        </label>

        <label htmlFor="technologies">
          <p>Teknologier:</p>
          <input type="text" id="technologies" name="technologies" onChange={updateTechnologies} value={technologies} />
        </label>

        <label htmlFor="link">
          <p>Link:</p>
          <input type="text" id="link" name="link" onChange={updateLink} value={link} />
        </label>

        <button type="submit" className="submitbutton">Legg til</button>
      </form>
    </section>
  );
}
