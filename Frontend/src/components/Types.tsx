export type studentProp = {
  name: string;
  degree: string;
  points: number;
  email: string;
  experiences: ExperienceProps[];
};

export type ContactProps = {
    email: string;
  };

export type HeaderProps = {
    student: string;
    degree: string;
    points: number;
    email: string;
  };

export type TitleProps = {
    title?: string;
    };
  

export type ProjectProps = {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
  };

  
export type ProjectsProps = {
    projects: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        link: string}[];
  };

export type submitProjectProps = {
    setProjectData: (callback: (prevProjects: any[]) => any[]) => void;
  };

export type ExperiencesProps = {
    experiences: ExperienceProps[];
  };

export type ExperienceProps = {
    description?: string;
  };