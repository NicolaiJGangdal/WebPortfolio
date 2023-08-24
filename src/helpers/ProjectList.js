import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import proj1 from "../Assets/myWorkoutApp.png";
import proj2 from "../Assets/gmn.png"
import proj3 from "../Assets/padelTennis.jpg";
import proj4 from "../Assets/budgetApp.png";
import proj5 from "../Assets/bitCoinMining.jpg";
import proj6 from "../Assets/TicTacToeGame.png";

const { t } = i18n;


export const ProjectList = [
  {
    name: t("projectItems.project1.name"),
    image: proj1,
    status: t("projectItems.project1.status"),
    status2: t("projectItems.project1.status2"),
    title: t("projectItems.project1.title"),
    skills: "Swift, Xcode, Figma, Github & App Store Connect",
    link: "https://github.com/NicolaiJGangdal/FitnessApp",
    link2: "https://www.apple.com/app-store/",
  },

  {
    name: t("projectItems.project2.name"),
    image: proj2,
    status: t("projectItems.project2.status"),
    status2: t("projectItems.project2.status2"),
    title: t("projectItems.project2.title"),
    skills: "React Native, Expo, Figma, Github",
    link: "https://github.com/NicolaiJGangdal/GuessNumberGame",
    link2: "https://www.apple.com/app-store/",
  },

  {
    name: t("projectItems.project3.name"),
    image: proj3,
    status: t("projectItems.project3.status"),
    status2: t("projectItems.project3.status2"),
    title: t("projectItems.project3.title"),
    skills: "Figma",
    link: "https://github.com/NicolaiJGangdal?tab=repositories",
    link2: "https://www.apple.com/app-store/",
  },

  {
    name: t("projectItems.project4.name"),
    image: proj4,
    status: t("projectItems.project4.status"),
    status2: t("projectItems.project4.status2"),
    title: t("projectItems.project4.title"),
    skills: "Figma",
    link: "https://github.com/NicolaiJGangdal?tab=repositories",
    link2: "https://www.apple.com/app-store/",
  },

  {
    name: t("projectItems.project5.name"),
    image: proj5,
    status: t("projectItems.project5.status"),
    status2: t("projectItems.project5.status2"),
    title: t("projectItems.project5.title"),
    skills: "Fake project to fill out space",
    link: "https://github.com/NicolaiJGangdal?tab=repositories",
    link2: "https://www.apple.com/app-store/",
  },

  {
    name: t("projectItems.project6.name"),
    image: proj6,
    status: t("projectItems.project6.status"),
    status2: t("projectItems.project6.status2"),
    title: t("projectItems.project6.title"),
    skills: "Xcode & Swift",
    link: "https://github.com/NicolaiJGangdal?tab=repositories",
    link2: "https://www.apple.com/app-store/",
  },
];
