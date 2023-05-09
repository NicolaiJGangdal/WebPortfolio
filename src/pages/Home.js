import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Nicolai</h2>
                <div className="prompt"> 
                    <p>A software developer with a passion for learning and creating.</p>
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
                            React, Angular, Redux, HTML, CSS, <br /> NPM, Yarn, Ionic, Bootstrap, <br/> MaterialUI, TailwindCSS
                        </span>
                    </li> 
                    <li className="item">
                        <h2>Backend</h2>
                        <span>
                            Java, Swift, .NET, GraphQL, C#, F#, <br />SQL, MySQL, Firebase 
                        </span>
                    </li> 
                </ol>
            </div>
        </div>
    );
}

export default Home;