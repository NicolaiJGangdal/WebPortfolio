import React from "react";
import { useTranslation } from "react-i18next";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

function Projects() {

  const { t } = useTranslation();

    return (
      <div className="projects">
        <h1>{t("projects.title")}</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Projects;