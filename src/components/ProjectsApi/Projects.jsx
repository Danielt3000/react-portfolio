import React from "react";
import "./projects.css";
import git from "./imgs-projects/github.png";
import link from "./imgs-projects/link.png";

import { useEffect, useState } from "react";

function Test() {
  const [projects, setprojects] = useState();

  // useEffect(() => {
  //   fetch(
  //     `https://backend-portfolio.danielt3000.repl.co/api/projects/`
  //   )
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       setprojects(actualData.projects);
  //     });
  // }, []);



  return (
    <>
      <div className="projects-body">
        <div className="qasdasdad">
          <h1 className="projects-h1">My Portfolio Projects</h1>
        </div>

        <div className="projects">
          {projects?.map((data) => {
            return (
              <div className="projects-card" key={data.id}>
                <img
                  className="project-img"
                  src={`https://res.cloudinary.com/ddn496rzj/${data.image}`}
                  alt=""
                />
                <div className="project-about">
                  <div>
                    <h3>{data.name}</h3>
                    <p>{data.about}</p>
                  </div>
                  <div className="btns-project">
                    <div className="btn-projects">
                      <a href={data.github}>
                        <img src={git} alt="git hub icon created " />
                      </a>
                    </div>
                    <div className="btn-projects">
                      <a href={data.url}>
                        <img src={link} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Test;
