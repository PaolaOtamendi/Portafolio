import { skills } from "../constanst/skills";
import {
  FaBook,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaMarkdown,
  FaBootstrap,
  FaNpm,
  FaDatabase,
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FaTeamspeak } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { DiScrum } from "react-icons/di";
import {
  SiVtex,
  SiJest,
  SiIntellijidea,
  SiVisualstudiocode,
  SiTailwindcss,
  SiRadixui,
  SiSpringboot,
  SiSwagger,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import "./stackskills.css";
// import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FaStar } from "react-icons/fa";

const iconMapSkills = {
  equipo: <RiTeamFill size="40" color="#00ff91" />,
  escucha: <FaTeamspeak size="40" color="#00ff91" />,
  scrum: <DiScrum size="40" color="#00ff91" />,
  aprendizaje: <FaBookBookmark size="40" color="#00ff91" />,
  html: <FaHtml5 size="40" color="#ff6600" />,
  css: <FaCss3Alt size="40" color="#0086b3" />,
  js: <FaJsSquare size="40" color="#65b800" />,
  java: <FaJava size="40" color="#ff0000" />,
  react: <FaReact size="40" color="#00f080" />,
  vtexio: <SiVtex size="40" color="#e311c3" />,
  nodejs: <FaNode size="40" color="#008a10" />,
  firebase: <IoLogoFirebase size="40" color="#ffbb00" />,
  jest: <SiJest size="40" color="#550522" />,
  intellij: <SiIntellijidea size="40" color="#fff" />,
  visualcode: <SiVisualstudiocode size="40" color="#026ab9" />,
  github: <FaGithub size="40" color="#fff" />,
  git: <FaGitAlt size="40" color="#fd6a57" />,
  npm: <FaNpm size="40" color="#d60000" />,
  figma: <FaFigma size="40" color="#fff" />,
  markdown: <FaMarkdown size="40" color="#fff" />,
  tailwind: <SiTailwindcss size="40" color="#57b6ff" />,
  bootstrap: <FaBootstrap size="40" color="#a011e3" />,
  radix: <SiRadixui size="40" color="#fff" />,
  springboot: <SiSpringboot size="40" color="#33c233" />,
  postgresql: <BiLogoPostgresql size="40" color="#2f6f88" />,
  sql: <FaDatabase size="40" color="#0576a2" />,
  swagger: <SiSwagger size="40" color="#3dbc1a" />,
};

export const StackSkills = () => {
  return (
    <section className="section_stack-skills">
      <div className="contain_title-skills">
        <h2 className="contain_skills-title text-white">Stack Tecnologico</h2>
        <p className="contain_skills-intro text-white">
          Mis Principales Tecnologías y Herramientas
        </p>
      </div>
      <div className="containe_stack-skills text-white">
        {skills.map((category, categoryIndex) => (
          <div className="categories_skills" key={categoryIndex}>
            <ul className="list_skills">
              {category.items.map((item, index) => (
                <li key={index} className="item_skills">
                  {/* <p className="icon_skills">{iconMapSkills[item.icon]}</p> */}
                  <Tippy
                    content={
                      <span className="tippy_item">
                        <FaStar size="15" />
                        <strong style={{ color: "#100614" }}>Nivel:</strong>{" "}
                        {item.experience}
                      </span>
                    }
                    trigger="click"
                    className="custom-tooltip"
                    placement="top"
                    arrow={false}
                    theme="light"
                    animation="fade"
                  >
                    <p className="icon_skills">{iconMapSkills[item.icon]}</p>
                  </Tippy>
                  <p className="name_skills">{item.skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
