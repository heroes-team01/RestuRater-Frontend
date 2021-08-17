



import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './home.css'
import Review from './review';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Footer from '../footer';

import LoginButton from "../login";
import LogoutButton from "../logout";
import { withAuth0 } from '@auth0/auth0-react';

//images
//==========================================================
import chineese from './img/chineese.jpg'
import eastern from './img/eastern.jpg'
import indian from './img/indian.jpg'
import welcome from './img/pasta.png'
import Logo from './img/logo.png'

export class Home extends Component {
    render() {
        return (
            <body>
                <header>
        <div class="logo-container">
            <img src= {Logo} alt=""/>
            {/* <p class="main-logo">Restu<span>Rater</span>
            </p> */}
        </div>
            <nav >
              <div class="bar">
                <a href="../home" class="bar-item active">Home</a>
                <a href="../category" class="bar-item">Categories</a>

                <a href="../Aboutus/Cards/Cardtest" class="bar-item ">About us</a>
              </div>
            </nav>
    </header>
              <div id='welcomeTM'>
              <div id='mainText'>
              <h1 >RestuRater</h1><br></br>
              <p className='para'>Count memories, not calories
</p>

{this.props.auth0.isAuthenticated ? <LogoutButton/>: <LoginButton />}

<a href="../Aboutus/Cards/Cardtest"><Button variant="warning"> Meet The Team</Button></a>{' '}


</div>
              <section id='welcome'>
                <img src={welcome} id='welcome-img' classNAme='navAndPic' alt='img'/>
              </section>
              </div>
                <section id='slide'>
                <Carousel fade import className='slide'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={eastern}
      alt="First slide"
    />
    <Carousel.Caption>
    <div className='text' >
      <h2>Middle Eastern Food</h2>
      <p className='para'>You say Happiness ,I say Taboleh</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={chineese}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className='text' >
      <h2>Chinese Food</h2>
      <p className='para'>Every good night has Chinese Food
</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={indian}
      alt="Third slide"
    />

    <Carousel.Caption>
        <div className='text' >
      <h2>Indian Food</h2>
      <p className='para'>Wake up your taste buds</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>







<section className="section">
            
            <Review />
</section>



<Footer />




            
            </body>
        )
    }
}

export default withAuth0(Home)
