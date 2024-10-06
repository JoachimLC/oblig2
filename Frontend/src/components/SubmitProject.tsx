import { useState, type FormEvent } from "react";
import { ProjectProps } from "./Types";
import { submitProjectProps } from "./Types";

export default function SubmitProject({ setProjectData }: submitProjectProps) {
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [newTechnology, setNewTechnology] = useState(""); 
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

  const addTechnology = () => {
    if (newTechnology.trim() !== "" && !technologies.includes(newTechnology)) {
      setTechnologies([...technologies, newTechnology]);
      setNewTechnology("");
    }
  };

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const updateNewTechnology = (event: FormEvent<HTMLInputElement>) => {
    setNewTechnology(event.currentTarget.value);
  };

  const updateLink = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setLink(input.value);
  };

  const addProjectToListOfProjects = (title: string, description: string, technologies: string[], link: string) => {
    const newProject: ProjectProps = {
      id: crypto.randomUUID(),
      title,
      description,
      technologies,
      link,
    };

    console.log("nytt prosjekt", newProject);

    setProjectData((prevProjects) => [...prevProjects, newProject]);
  };

  const SubmitWithState = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !descriptionValid) return;

    addProjectToListOfProjects(title, description, technologies, link);
    setTitle("");
    setDescription("");
    setTechnologies([]);
    setNewTechnology("");
    setLink("");
    setTitleIsDirty(false);
    setTitleIsTouched(false);
    setTitleValid(false);
    setDescriptionIsDirty(false);
    setDescriptionIsTouched(false);
    setDescriptionValid(false);
  };

  return (
    <section className="componentcard">
      <h2>Legg til et nytt prosjekt</h2>
      <p>(nye prosjekter legges til i den lokale usestate for prosjekter og lastes dermed inn som nytt prosjekt over)</p>
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
          <input
            type="text"
            id="newTechnology"
            name="newTechnology"
            onChange={updateNewTechnology}
            value={newTechnology}
          />
          <button type="button" className="submitbutton" onClick={addTechnology}>Legg til teknologi</button>
            <ul>
            {technologies.map((technology, index) => (

                <li key={index}>
                <p>{technology}</p>
                <button type="button" className="submitbutton" onClick={() => removeTechnology(technology)}>Fjern</button>
                </li>
            ))}
            </ul>
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
