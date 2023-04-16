// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";
import evenster from "../../../src/assets/Images/evenster.png";
import enjoy from "../../../src/assets/Images/enjoy.png";
import orm from "../../../src/assets/Images/orm.png";
import password from "../../assets/Images/password.png";
import blog from "../../../src/assets/Images/blog.png";
import notetaker from "../../../src/assets/Images/notetaker.png";
import weatherdashboard from "../../../src/assets/Images/weatherdashboard.png";
import workdayscheduler from "../../../src/assets/Images/workdayscheduler.png";
import workout from "../../assets/Images/workout.png"

const Portfolio = (singleProject) => {

  const projectList = [
    {
      title: "Evenster",
      summary: "Evenster was created to allow the user to input in a city and receive a list of events and the weather in and around the area.",
      image: evenster,
      technologies: "JavaScript, Weather API, Ticketmaster API, Bulma, GitHub Pages, CSS",
      deployedLink: "https://salenaoneill.github.io/eventster/",
      github: "https://github.com/liliaungurean/eventster",
    },
    {
      title: "Enjoy The Bite",
      summary: "This project was created so that the user is able to create their own profile with and review restaurants that they enjoyed. ",
      image: enjoy,
      technologies: "JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Heroku, Shell",
      deployedLink: "https://lit-wave-65693.herokuapp.com/",
      github: "https://github.com/liliaungurean/Enjoy-The-Bite",
    },
    {
      title: "Just 2 More",
      summary: "Evenster was created to allow the user to input in a city and receive a list of events and the weather in and around the area.",
      image: workout,
      technologies: "JavaScript, React, React-Bootsrtap, Heroku, GitHub Pages, CSS",
      deployedLink: "",
      github: "https://github.com/Akshatha2022/WorkoutTrackerApp",
    },
    {
      title: "ORM-E-commerce-Back-End",
      summary: "This is a back end application. This application uses MySQL2, Express, Sequelize and dotenv.",
      image: orm,
      technologies: "JavaScript, Express, Sequelize, dotenv",
      github: "https://github.com/liliaungurean/ORM-E-commerce-Back-End",
    },
    {
      title: "Password Generator",
      summary: "To create a page where the user is able to generate a random password. Each password is chosen at random and none of them are the same. ",
      image: password,
      technologies: "JavaScript, CSS, HTML",
      deployedLink: "https://liliaungurean.github.io/Password-Generator/",
      github: "https://github.com/liliaungurean/Password-Generator",
    },
    {
      title: "Tech Blog",
      summary: "This is a tech blod applicaiton that uses express-handlebars, MYSQL2, Sequlize, dotenv, express, bcrypt package and connect-session-sequelize. It allowed the user to cleate an account, create, delete and comment on tech blogs.",
      image: blog,
      technologies: "JavaScript, Handlebars.js, Express.js, MySQL2, Sequelize, dotenv, Node bcrypt.js, express-session cookies, connect-session-sequelize",
      deployedLink: "https://techblogsmvc.herokuapp.com/",
      github: "https://github.com/liliaungurean/MVC-Tech-Blog",
    },
    {
      title: "Note Taker",
      summary: "This project was created to allow the user to add, save and delete notes. This app used both front end and back end (Express,js).",
      image: notetaker,
      technologies: "JavaScript, Express.js, Heroku, fs module, NPM uuid package",
      deployedLink: "https://note-taking01.herokuapp.com/",
      github: "https://github.com/liliaungurean/Note-Taker",
    },
    {
      title: "Weather Dashboard",
      summary: "This was created to let the use search for a city and get the weather of the current day and a 5 day forecast. It allows the user to get the temperature, wind speed and humidity.",
      image: weatherdashboard,
      technologies: "JavaScript, OpenWeatherMap API, localStorage",
      deployedLink: "https://liliaungurean.github.io/Todays-Weather/",
      github: "https://github.com/liliaungurean/Todays-Weather",
    },
    {
      title: "Work Day Scheduler",
      summary: "This project was created to help the user keep track of their daily schedule. It allows the user to see the current time and date as soon as they open the page.",
      image: workdayscheduler,
      technologies: "JavaScript, localStorage, jQuery, Moment.js",
      deployedLink: "https://liliaungurean.github.io/Calendar/",
      github: "https://github.com/liliaungurean/Calendar",
    },
];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;