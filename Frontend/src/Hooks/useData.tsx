import { useCallback, useState, useEffect } from 'react';
import { fetchProjects, fetchStudentData } from '../Services/api';
import { ProjectProps, studentProp } from '../components/Types';

export function useFetchData() {
  const [projectData, setProjectData] = useState<ProjectProps[]>([]);
  const [studentData, setStudentData] = useState<studentProp | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [projects, student] = await Promise.all([
        fetchProjects(),
        fetchStudentData(),
      ]);
      setProjectData(projects);
      setStudentData(student);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { projectData, studentData, loading, error, fetchData };
};

export default useFetchData;