import { ProjectProps, studentProp } from '../components/Types'
import { ofetch } from 'ofetch';


    
const BASE_URL = 'http://localhost:3000';

export const fetchProjects = async (): Promise<ProjectProps[]> => {
    const response = await ofetch(`${BASE_URL}/projects`);
    return response.data;
};

export const fetchStudentData = async (): Promise<studentProp> => {
    const response = await ofetch(`${BASE_URL}/student`);
    return response;
};

