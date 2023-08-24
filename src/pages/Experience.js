import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

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
                    {t("experience.experience1.title")}
                    </h3>
                    <p>{t("experience.experience1.experience")}</p>
                </VerticalTimelineElement>                

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2013 - 2015"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<SportsHandballIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience2.title")}
                    </h3>
                    <p>{t("experience.experience2.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2015 - 2016"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<MilitaryTechIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience3.title")}
                    </h3>
                    <p>{t("experience.experience3.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2016 - 2017"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<StoreIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience4.title")}
                    </h3>
                    <p>{t("experience.experience4.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2017 - 2018"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<CameraIndoorIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience5.title")}
                    </h3>
                    <p>{t("experience.experience5.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="Summer of 2016/17/18/19"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<PhishingIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience6.title")}
                    </h3>
                    <p>{t("experience.experience6.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2018 - 2022"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<AccessibilityIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience7.title")}
                    </h3>
                    <p>{t("experience.experience7.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience8.title")}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor
                    </h4>
                    <p>{t("experience.experience8.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2022 - 2023"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<NextWeekIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience9.title")}
                    </h3>
                    <p>{t("experience.experience9.experience")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2023 - Present"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<NextWeekIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    {t("experience.experience10.title")}
                    </h3>
                    <p>{t("experience.experience10.experience")}</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Experience;