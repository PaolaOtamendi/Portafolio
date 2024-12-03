import { skills } from "../../constanst/skills";

import {
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
  FaStar,
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
import { useState } from "react";
import "./bentostack.css";

const getIcon = (icon) => {
    const iconMap = {
  equipo: <RiTeamFill size="30" color="#00ff91" />,
  escucha: <FaTeamspeak size="30" color="#00ff91" />,
  scrum: <DiScrum size="30" color="#00ff91" />,
  aprendizaje: <FaBookBookmark size="30" color="#00ff91" />,
  html: <FaHtml5 size="30" color="#ff6600" />,
  css: <FaCss3Alt size="30" color="#0086b3" />,
  js: <FaJsSquare size="30" color="#65b800" />,
  java: <FaJava size="30" color="#ff0000" />,
  react: <FaReact size="30" color="#00f080" />,
  vtexio: <SiVtex size="30" color="#e311c3" />,
  nodejs: <FaNode size="30" color="#008a10" />,
  firebase: <IoLogoFirebase size="30" color="#ffbb00" />,
  jest: <SiJest size="30" color="#550522" />,
  intellij: <SiIntellijidea size="30" color="#fff" />,
  visualcode: <SiVisualstudiocode size="30" color="#026ab9" />,
  github: <FaGithub size="30" color="#fff" />,
  git: <FaGitAlt size="30" color="#fd6a57" />,
  npm: <FaNpm size="30" color="#d60000" />,
  figma: <FaFigma size="30" color="#fff" />,
  markdown: <FaMarkdown size="30" color="#fff" />,
  tailwind: <SiTailwindcss size="30" color="#57b6ff" />,
  bootstrap: <FaBootstrap size="30" color="#a011e3" />,
  radix: <SiRadixui size="30" color="#fff" />,
  springboot: <SiSpringboot size="30" color="#33c233" />,
  postgresql: <BiLogoPostgresql size="30" color="#2f6f88" />,
  sql: <FaDatabase size="30" color="#0576a2" />,
  swagger: <SiSwagger size="30" color="#3dbc1a" />,
};

return iconMap[icon] || <span>Icon not found</span>;

};

export const BentoStack = () => {
  return (
    <section>
      <div className="contain_title-skills">
        <h2 className="contain_skills-title text-white">Stack Tecnologico</h2>
        <p className="contain_skills-intro text-white">
          Mis Principales Tecnologías y Herramientas
        </p>
      </div>
      <div className="bento-container">
        {skills.map((category) => (
          <div key={category.id} className="bento-category">
            <p className="category-title">{category.title}</p>
            <div className="bento-items">
            {category.items.map((item, index) => (
              <div key={index} className="bento-item">
                <div className="icon">{getIcon(item.icon)}</div>
                <p className="skill-name">{item.skill}</p>
                <p className="experience">{item.experience}</p>
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};
