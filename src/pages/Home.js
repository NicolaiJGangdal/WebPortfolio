import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Trans, useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Nicolai</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <p>æææææææææææææææææ</p>
          <Trans i18nKey="title"></Trans>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>
              React, React Native, Swift, <br />
              Angular, Typescript, Javascript, <br />
              Redux, HTML, CSS, <br />
              NPM, Yarn, Ionic, Bootstrap, <br />
              MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>
              Java, C#, GraphQL, <br />
              SQL, MySQL
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
