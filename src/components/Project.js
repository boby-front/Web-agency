import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  const [curentProject] = useState(projectsData[projectNumber]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);
  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{curentProject.title}</h1>
        <p>{curentProject.date}</p>
        <ul className="languages">
          {curentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{curentProject.title}</h3>
            <p>{curentProject.infos}</p>
          </span>
          <img
            src={curentProject.img}
            alt={curentProject.img}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={curentProject.link}
            target="_blank"
            noopener
            noreferrer
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </div>
  );
};

export default Project;
