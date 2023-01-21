import React from "react";
import "./projects.css";
import git from "./imgs-projects/github.png";
import link from "./imgs-projects/link.png";
import logos from "./imgs-projects/logos-small.svg";
import js from "./imgs-projects/javascript-original.svg";
import css from "./imgs-projects/css3.svg";
import html5 from "./imgs-projects/html5.svg";
import django from "./imgs-projects/django-plain.svg";
import react from "./imgs-projects/react.svg";
import { useEffect, useState } from "react";

function Test() {
  const [projects, setprojects] = useState();

  useEffect(() => {
    fetch(`https://backend-portfolio.danielt3000.repl.co/api/projects/`)
      .then((response) => response.json())
      .then((actualData) => {
        setprojects(actualData.projects);
      });
  }, []);

  return (
    <>
      <div className="projects-body">
        <div className="project-title">
          <h1 className="projects-h1">My Portfolio Projects</h1>
        </div>

        <div className="projects">
          {projects?.map((data) => {
            return (
              <div className="card-content" key={data.id}>
                <div className="opacity">
                  <img
                    className="imagen"
                    src={`https://res.cloudinary.com/ddn496rzj/${data.image}`}
                    alt=" "
                  />
                </div>
                <div className="info">
                  <div className="title_logo">
                    <h4 className="title">{data.name}</h4>
                    <img className="logo_mine" src={logos} alt="" />
                  </div>
                  <div className="about_project">
                    <p className="content_about">
                      {data.about + "...."}
                      <a className="link_ownPage" href="http://">
                        {" "}
                        More About the page ---
                      </a>
                    </p>
                  </div>
                  <div className="tec_links">
                    <h4 className="h4_tec">Technology's</h4>
                    <h4 className="h4_links">Links</h4>
                  </div>
                  <div className="two_divs_tec_links">
                    <div className="technologys_use">
                      <img className="format_size" src={html5} alt="" />
                      <img className="format_size" src={css} alt="" />
                      <img className="format_size" src={js} alt="" />
                      <img className="format_size" src={react} alt="" />
                      <img className="format_size" src={django} alt="" />
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Test;

{
  /* <div className="btns-project">
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
</div>; */
}
