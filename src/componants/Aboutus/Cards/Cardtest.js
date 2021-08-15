import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";
// import NavBar from '../components/NavBar'
import './Aboutus.css';
import pic1 from "../img/1111.jpg";
import pic2 from '../img/22222.jpg'
import pic3 from '../img/33333.jpg'
import pic4 from '../img/4444444.jpg'

// import { Link } from "react-router-dom";

class AboutUs extends Component {


  render() {
    const info = [
      {
        "name": "Raghad-Abdelghani",
        "img": pic4,
        "githup": `https://github.com/Raghad-Abdelghani`,
        "Linkedin": ''
      },
      {
        "name": "Heba Almomani",
        "img": pic2,
        "githup": `https://github.com/Heba1998`,
        "Linkedin": ''
      },
      {
        "name": "Amneh AL-Momany",
        "img": pic3,
        "githup": `https://github.com/Amneh-momani`,
        "Linkedin": ''
      },
      {
        "name": "Mahmoud Abubaker",
        "img": pic1,
        "githup": `https://github.com/Sukina12`,
        "Linkedin": 'https://www.linkedin.com/in/mahmoudabubaker/'
      }

    ]


    const card = info.map((item) => {
      return (
        <>
          <div className="card-container">
            {/* <span className="pro">PRO</span> */}
            <img className="round" src={item.img} alt="user" style={{ width: '10rem', height: '10rem' }} />
            {/* <h3></h3> */}
            <h6>{item.name}</h6>
            <p>Junior Full-Stack Developer</p>
            <div className="buttons">

              <button className="primary ">
                <a href={item.githup}>GitHub</a>
              </button>
              <button className="primary ghost">
                <a href={item.portfolio}>Linkedin</a>

              </button>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>FrontEnd and BackEnd Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>



        </>);
    });

    return (
      <>
        <div className='aboutTeamMembers'><h1 className="TeamMembers">Meet Our Team</h1></div>
        <div className="all-cards">

          {card}

        </div>

      </>
    );
  }

}

export default (AboutUs);