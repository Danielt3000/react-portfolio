import React from "react";
import profile from "../img/mypicture.svg";
import "./about.css";

import { useState, useEffect } from "react";

function About() {
  const [time, setTime] = useState();
  const [myTime, setMyTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let s = new Date().toLocaleTimeString();
      let newS = s.slice(0, 5);
      let newese = s.slice(-2);
      const dates = newS.concat(" ", newese);
      setTime(dates);

      let d = new Date().toLocaleTimeString("en", {
        timeZone: "America/Los_Angeles",
      });
      let newD = d.slice(0, 5);
      let neweseD = d.slice(-2);
      const MyDates = newD.concat(" ", neweseD);
      setMyTime(MyDates);
    }, 1000);

    return () => {};
  }, []);

  return (
    <div className="centered">
      <div className="flexing">
        <div className="picture">
          <img
            className="picture--foto"
            src={profile}
            alt="Picture of Oscar Daniel sititng on his Couch"
          />
        </div>
        <div className="fit">
          <div className="circle">
            <p className="circle__upper-text">My Time</p>
            <p className="circle__down-text">{myTime}</p>
          </div>
          <div className="circle">
            <p className="circle__upper-text">Your Time</p>
            <p className="circle__down-text">{time}</p>
          </div>
        </div>
      </div>
      <div className="me-center">
        <section className="me">
          <p className="me--text">
            I am starting a career in front-end development because I have a
            strong passion for creating beautiful and user-friendly websites and
            applications, and enjoy the creativity and problem-solving that come
            with this field. <br></br> <i>Full Stack Developer</i> <br></br>{" "}
            Html / CSS / JavaScript / Redux / Node.Js/ AWS(Basic)
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
