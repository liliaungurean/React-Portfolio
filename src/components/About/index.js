import React from "react";
import PortfolioImage from "../../assets/Lilia-Ungurean.png";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql,
} from "react-icons/si";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={PortfolioImage}
            className="my-2"
            style={{ width: "60%" }}
            alt="cover"
          ></img>
        </div>
        <div className="col-6">
          <h1 id="about">About me</h1>
          <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
                Hi, My name is Lilia Ungurean. I am a full-stack software engineer 
                graduation from cooding boot-camp at the Univerisy of Minnesota. 
                This has provided me with great understading and competent in 
                object-oriented programming of progressive web applications using the
                MongoDB, Express, React and Node.js (MERN) JavaScript.
            <br></br>
            <br></br>
          </h6>
          <br></br>
          <br></br>
          <br></br>
          <h4>Technical Skills:</h4>
          <h2>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <DiJqueryLogo />
            <FaReact />
            <SiRedux />
            <FaBootstrap />
            <FaNode />
            <SiMysql />
            <DiMongodb />
            <SiGraphql />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;