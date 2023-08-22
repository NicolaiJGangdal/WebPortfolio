import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "../styles/Experience.css";

import SchoolIcon from '@material-ui/icons/School';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import PhishingIcon from '@mui/icons-material/Phishing';
import StoreIcon from '@material-ui/icons/Store';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import NextWeekIcon from '@mui/icons-material/NextWeek';

function Experience() {
    return (
        <div className="experience placing">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2012 - 2015"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Tvedestrand og Åmli videregående Skole, Tvedestrand, Agder (High School)
                    </h3>
                    <p> Generell Studiekompetanse</p>
                </VerticalTimelineElement>                

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2013 - 2015"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<SportsHandballIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Handball coach, Tvedestrand, Agder
                    </h3>
                    <p> Managerial experience</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2015 - 2016"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<MilitaryTechIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Compulsary military service, Army, 2. Batalion, Troms og Finnmark
                    </h3>
                    <p> Infantryman, Communications Officer, Sanitation Level 2, Military driver's license for ATV and Snowmobile</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2016 - 2017"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<StoreIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Meny Norges Gruppen, Tvedestrand, Agder
                    </h3>
                    <p> Shop Assistant</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2017 - 2018"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<CameraIndoorIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Sector Alarm AS, Bergen, Vestland
                    </h3>
                    <p> Security Consultant & Sales</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Summer of 2016/17/18/19"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<PhishingIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Olstad Fiske AS, Lyngør, Agder
                    </h3>
                    <p> Fisherman, Boat Manager</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2018 - 2022"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<AccessibilityIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        UNICEF Norge, Bergen, Vestland
                    </h3>
                    <p> UNICEF Ambassador, Team-lead, Field-Coordinator & Sales</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Høgskulen på Vestlandet, Bergen, Vestland
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor
                    </h4>
                    <p> Computer Engineer</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2022 - 2023"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<NextWeekIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        tietoevry, Fornebu, Oslo
                    </h3>
                    <p> Solution Consultant, Frontend Developer</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2023 - Present"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<NextWeekIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        tietoevry, Fyllingsdalen, Bergen
                    </h3>
                    <p> Solution Consultant, Frontend Developer</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Experience;