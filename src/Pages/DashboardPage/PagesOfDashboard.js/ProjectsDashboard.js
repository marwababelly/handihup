import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

const ProjectDashboard = () => {
  const [project, setProject] = useState({
    id: 1,
    name: '',
    description: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Projects');

        setProject(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProjectData();
  }, []);

  // const handleUpdateProject = (updatedProject) => {
  //   const updateProjectData = async () => {
  //     try {
  //       const response = await axios.patch('http://127.0.0.1:8000/api/dashboard/admin/products', updatedProject);
  //       setProject(response.data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   updateProjectData();
  // };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/Projects/${projectId}`);
      alert('Project deleted successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Project Dashboard</h1>
      {/* <UpdateForm
        item={project}
        handleUpdate={handleUpdateProject}
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'description', label: 'Description', type: 'text' },
        ]}
      /> */}
      <button onClick={handleDeleteProject}>Delete Project</button>
      <h2>Project Details</h2>
      <ul>
        <li>ID: {project.id}</li>
        <li>Name: {project.name}</li>
        <li>Description: {project.description}</li>
      </ul>
    </div>
  );
};

export default ProjectDashboard;