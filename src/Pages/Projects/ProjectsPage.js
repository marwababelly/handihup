import React, { useState } from "react";
import style from "./ProjectsPage.module.css";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from "../../assets/necklace.jpg";
import skincare from "../../assets/skinCareOil.jpg";
import neonArt from "../../assets/neon.jpg";
import { NavLink, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const categories = [
    {
      id: "1",
      title: "Art",
      description: "Let's dive into some interesting art projects!",
      imageUrl: fontArt,
      link: "Art",
    },
    {
      id: "2",
      title: "Skin care products",
      description: "Looking for a clear skin, let's dive in!",
      imageUrl: skinCare,
      link: "Skin care products",
    },
    {
      id: "3",
      title: "Accessories",
      description:
        "Let's dive into aesthetic collections of handmade accessories!",
      imageUrl: rings,
      link: "Accessories",
    },
    {
      id: "4",
      title: "Pottery",
      description: "If you interested in pottery, this is your right place!",
      imageUrl: pottery,
      link: "Pottery",
    },
  ];

  const projects = [
    {
      id: 1,
      projectName: "Pottery",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: pottery,
      link: "Pottery",
      ownerOfProject: "Rana Alhaj Ahmad",
    },
    {
      id: 2,
      projectName: "SkinCare",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: skinCare,
      link: "SkinCare",
      ownerOfProject: "Bana",
    },
    {
      id: 3,
      projectName: "FontArt",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: fontArt,
      link: "FontArt",
      ownerOfProject: "Rana Alhaj Ahmad",
    },
    {
      id: 4,
      projectName: "Accessories",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: rings,
      link: "Accessories",
      ownerOfProject: "Omar",
    },
  ];

  const productsList = [
    {
      id: 1,
      projectname: "Pottery",
      image: pottery,
      title: "Pottery Plates",
      description: "Beautiful and Colourful handmade pottery plates",
      link: "Pottery",
    },
    {
      id: 2,
      projectname: "SkinCare",
      image: skincare,
      title: "Essential Oil ",
      description: "Cosmetic and Natural oil for a better skin",
      link: "SkinCare",
    },
    {
      id: 3,
      projectname: "FontArt",
      image: neonArt,
      title: "Neon Quotes Art",
      description: "Decorate your home with these amazing Neon Art",
      link: "FontArt",
    },
    {
      id: 4,
      projectname: "Accessories",
      image: rings,
      title: "Bead Rings",
      description: "Spacious amount of trendy bead rings ",
      link: "Accessories",
    },
  ];
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filterProjects = (category) => {
    const project = projects.find(
      (project) => project.projectName === category || project.link === category
    );
    if (project) {
      setSelectedProject(project);
    } else {
      setSelectedProject(null);
    }
  };

  const filterCategories = (cat) => {
    const catego = categories.find(
      (catego) => catego.title === cat || catego.link === cat.trim()
    );
    if (catego) {
      setSelectedCategory(catego);
      navigate(`/Projects/${catego.title}`);
    } else {
      setSelectedCategory(null);
    }
  };

  const filterProducts = (pro) => {
    const product = productsList.find(
      (product) => product.title === pro || product.link === pro.trim()
    );
    if (product) {
      setSelectedProduct(product);
      navigate(`/Projects/${product.link}/Product`);
    } else {
      setSelectedProduct(null);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        <div className={style.dropdownContainer}>
          <Dropdown onSelect={(key) => filterProjects(key.trim())}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={style.dropdownToggle}
            >
              Projects
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {projects.map((project) => (
                <Dropdown.Item key={project.id} eventKey={project.link.trim()}>
                  {project.projectName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={(key) => filterCategories(key.trim())}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={style.dropdownToggle}
            >
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((cat) => (
                <Dropdown.Item key={cat.id} eventKey={cat.link.trim()}>
                  {cat.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={(key) => filterProducts(key.trim())}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={style.dropdownToggle}
            >
              Products
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {productsList.map((pro) => (
                <Dropdown.Item key={pro.id} eventKey={pro.link.trim()}>
                  {pro.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {selectedProject ? (
          <NavLink href={`/Projects/${selectedProject.link}/Product`}>
            <div className={style.project}>
              <img
                className={style.img}
                src={selectedProject.img}
                alt={selectedProject.projectName}
              />
              <div className={style.content}>
                <h3>{selectedProject.id}</h3>
                <h2>{selectedProject.projectName}</h2>
                <p>{selectedProject.projectDescription}</p>
              </div>
              <button className={style.button}>
                <NavLink href={`/Projects/${selectedProject.link}/Product`}>
                  View Products
                </NavLink>
              </button>
              <hr className={style.hr} />
            </div>
          </NavLink>
        ) : (
          projects.map((project) => (
            <NavLink href={`/Projects/${project.link}/Product`}>
              <div className={style.project}>
                <img
                  className={style.img}
                  src={project.img}
                  alt={project.projectName}
                />
                <div className={style.content}>
                  <h3>{project.id}</h3>
                  <h2>{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                </div>
                <div className={style.divNavLink}>
                  <NavLink
                    href={`/Projects/${project.link}/Product`}
                    className={style.navLink}
                  >
                    View Products
                  </NavLink>{" "}
                  <NavLink
                    href={`/OwnerPage/${project.ownerOfProject}`}
                    className={style.navLink}
                  >
                    View Owner Details
                  </NavLink>
                </div>
                <hr className={style.hr} />
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
