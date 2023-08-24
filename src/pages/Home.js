import React from "react";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

  //  if multiple namespaces you could useTranslation(['home', 'nectNS', 'oneMore']);
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="about">
        <h2>{t("homePage.title")}</h2>
        <div className="prompt">
          <p>{t("homePage.subtitle")}</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>{t("homePage.skills")}</h1>
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
