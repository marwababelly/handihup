import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTable from "react-data-table-component";
import { Nav } from "react-bootstrap";

const ProjectDashboard = () => {
  const [project, setProject] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/Projects");

        setProject(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProjectData();
  }, []);

  const handleUpdateProject = (updatedProject) => {
    const updateProjectData = async () => {
      try {
        const response = await axios.patch(
          "http://127.0.0.1:8000/api/dashboard/admin/products",
          updatedProject
        );
        setProject(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    updateProjectData();
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/Projects/${projectId}`);
      alert("Project deleted successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "description",
      selector: (row) => row.description,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          {/* <button onClick={() => handleDelete(row)}>Delete</button> */}
          <button>
            {" "}
            <Nav.Link href="/formEdit">Edit</Nav.Link>
          </button>
          {/* {isDeleteConfirmOpen && rowToDelete?.id === row.id && (
            <DeleteConfirmationModal
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )} */}
        </>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div>
    //   <h1>Project Dashboard</h1>
    //   <UpdateForm
    //     item={project}
    //     handleUpdate={handleUpdateProject}
    //     fields={project}
    //   />
    //   <button onClick={handleDeleteProject}>Delete Project</button>
    //   <h2>Project Details</h2>
    //   <ul>
    //     <li>ID: {project.id}</li>
    //     <li>Name: {project.name}</li>
    //     <li>Description: {project.description}</li>
    //   </ul>
    // </div>
    <>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={project}
        fixedHeader
      />
      {/* {isDeleteConfirmOpen && (
        <DeleteConfirmationModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )} */}
    </>
  );
};

export default ProjectDashboard;
