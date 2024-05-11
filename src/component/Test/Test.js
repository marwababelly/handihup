import React from "react";
import { NavLink } from "react-bootstrap";

const Test = () => {
  const projectDetails = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
    { id: 4, title: "Project 4", description: "Description of Project 4" },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectDetails.map((project) => (
          <li key={project.id}>
            <NavLink href={`/Project/${project.id}`}>{project.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
