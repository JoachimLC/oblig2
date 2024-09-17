import { useState, useEffect } from 'react';
import { ofetch } from 'ofetch';
import './App.css';
import Projects from './components/Projects';
import { projectProp } from './components/Project';
import Title from './components/Title';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import SubmitProject from './components/SubmitProject';

function App() {
  

  
  const student = {
    name: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    email: "student@hiof.no",
    experiences: [
		  { name: "Figma UI for customer X" },
		  { name: "Website for customer Y" }
	  ]
  }

  const [projectData, setProjectData] = useState<projectProp[]>([]);


  const initializeData = () => {
    console.log('fetching data');
    
    ofetch('http://localhost:3000/projects')
      .then((response: { data: projectProp[] }) => {
        console.log('data fetched');
        
        setProjectData(response.data); 

        console.log('data initialized');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <>
    <Header student={student.name} degree={student.degree} points={student.points} />
    <Title title='Erfaringer'/>

    <Experiences experiences={student.experiences} />
    <Contact email={student.email} />
    
    <Title title='Oversikt over prosjekter'/>
      <Projects projects={projectData} />

    <ContactForm/>

    <SubmitProject setProjectData={setProjectData} projects={projectData}/>

    </>
  );
}

export default App;
