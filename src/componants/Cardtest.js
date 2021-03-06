import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";
// import NavBar from '../components/NavBar'
import './Aboutus/Cards/Aboutus.css';
import pic1 from "./Aboutus/img/1111.jpg";
import pic2 from './Aboutus/img/22222.jpg'
import pic3 from './Aboutus/img/33333.jpg'
import pic4 from './Aboutus/img/4444444.jpg'

import Header from "./header";
import Footer from "./footer";
// import { Link } from "react-router-dom";

class AboutUs extends Component {


  render() {




    const info = [
      {
        "name": "Raghad-Abdelghani",
        "img": pic4,
        "githup": `https://github.com/Raghad-Abdelghani`,
        "Linkedin": 'https://www.linkedin.com/in/raghad-abdelghani/'
      },
      {
        "name": "Heba Almomani",
        "img": pic2,
        "githup": `https://github.com/Heba1998`,
        "Linkedin": 'https://www.linkedin.com/in/heba-almomani/'
      },
      {
        "name": "Amneh AL-Momany",
        "img": pic3,
        "githup": `https://github.com/Amneh-momani`,
        "Linkedin": 'https://www.linkedin.com/in/amnehalmomany-b13534193/'
      },
      {
        "name": "Mahmoud Abubaker",
        "img": pic1,
        "githup": `https://github.com/MahmoudAbubaker9`,
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
                <button className="primary ">
                  <a href={item.Linkedin}>Linkedin</a>

                </button>
              </div>
              <div className="skills">
                <h4>Skills</h4>
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
      < Header />
        <div className='aboutTeamMembers'><h1 className="TeamMembers">Meet Our Team</h1></div>
        <div className="all-cards">

          {card}

        </div>
<Footer/>
      </>
    );
  }

}

export default (AboutUs);