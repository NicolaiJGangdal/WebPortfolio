import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaAppStore } from 'react-icons/fa';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
          <b>{project.status}</b> {project.status2}
        </p>
        <p>
          <b>{project.title}: </b> {project.skills}
        </p>
          <div>
          <Link to={project.link} target="_blank">
          <GitHubIcon />
          </Link>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link to={project.link2} target="_blank">
          <FaAppStore />
          </Link>  
          </div>
      </div>
    );
  }
  
  export default ProjectDisplay;