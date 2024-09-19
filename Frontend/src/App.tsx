import { useState, useEffect } from 'react';
import { ofetch } from 'ofetch';
import './App.css';
import Projects from './components/Projects';
import { ProjectProps } from './components/Types';
import Title from './components/Title';
import Header from './components/Header';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm';
import SubmitProject from './components/SubmitProject';
import { ExperienceProps } from './components/Types';
import ProjectsPerTechnology from './components/ProjectsPerTechnology';


function App() {
  
  type studentProp = {
    name: string;
    degree: string;
    points: number;
    email: string;
    experiences: ExperienceProps[];
  };


  const [projectData, setProjectData] = useState<ProjectProps[]>([]);
  const [studentData, setStudentData] = useState<studentProp | null>(null); 


  const initializeData = () => {
    console.log('fetching data');
    
    ofetch('http://localhost:3000/projects')
      .then((response: { data: ProjectProps[] }) => {
        console.log('data fetched');
        
        setProjectData(response.data); 

        console.log('data initialized');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      ofetch('http://localhost:3000/student')
        .then((response: studentProp) => { 
          console.log('student data fetched');
          setStudentData(response);
          console.log('data initialized');
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
  };

  useEffect(() => {
    initializeData();
  }, []);

  
  if (!studentData) {
    return <p>Loading student data...</p>;
  }

  return (
    <>
      <Header student={studentData.name} degree={studentData.degree} points={studentData.points} email={studentData.email} />
      <Title title='Erfaringer' />
      <Experiences experiences={studentData.experiences} />

      <Title title='Oversikt over prosjekter'/>
      <Projects projects={projectData} />
      <ProjectsPerTechnology projects={projectData}/>
      <ContactForm/>

      <SubmitProject setProjectData={setProjectData}/>
    </>
  );
}

export default App;
