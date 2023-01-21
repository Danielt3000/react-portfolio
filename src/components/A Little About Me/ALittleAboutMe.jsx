import React from "react";
import "./little.css";
import foto_me from "../img/mypicture.svg";
function ALittleAboutMe() {
  return (
    <div>
      <div>
        <h2 className={"about_h2"}>Just Little About Me</h2>
        <div>
          <div className={"is_about-h4s"}>
            <div className={"container"}>
              <div className={"new-ps"}>
                <p className="sizes_ps">
                  I&apos;am a web developer with experience:<br></br>
                  <i className="yelllow">
                    Java-Script, Django, HTML, CSS and React.
                  </i>
                  I have astrong passion for creating dynamic and interactive
                  user experiences, and have experience in back-end technologies
                  to ensure smooth functionality of websites. My proficiency{" "}
                  <br></br>in HTMLand CSS allows me to create visually appealing
                  andresponsive designs. <br></br>I also have experience in
                  React which helped me to build and maintain high-performance
                  web applications as the first one this portofolio im proud to
                  say is mine.
                </p>
                <p className="news_p2 sizes_ps">
                  My ultimate goal is to secure a position anywhere as developer
                  at a company that specializes in web development. I am
                  constantly seeking to improve my skills through online
                  courses, attending meetups. I am confident that with my
                  current skillset and my desire to learn and grow, I will be
                  able to reach my career goals learning <br></br>
                  <i className="yelllow">algorithms and Data-Strucuture</i>{" "}
                  <br></br> what would be perfect for any company who is seeking
                  someone who understand the problems they will have in the
                  future
                </p>
              </div>
              {/* <div className={"clase_img_about"}>
                <img src={foto_me} className={"about_img"} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ALittleAboutMe;
