import { useState, useEffect } from 'react';
import { ofetch } from 'ofetch';
import './App.css';
import Projects from './components/Projects';
import { ProjectProps } from './components/Types';
import StudentHeader from './components/StudentHeader';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm';
import SubmitProject from './components/SubmitProject';
import { studentProp } from './components/Types';
import ProjectsPerTechnology from './components/ProjectsPerTechnology';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  
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
      <Header/>

      <main>
        <StudentHeader student={studentData.name} degree={studentData.degree} points={studentData.points} email={studentData.email} />
        <Experiences experiences={studentData.experiences} />

        <Projects projects={projectData} />
        <ProjectsPerTechnology projects={projectData}/>
        <ContactForm/>

        <SubmitProject setProjectData={setProjectData}/>
      </main>

      <Footer/>

    </>
  );
}

export default App;
