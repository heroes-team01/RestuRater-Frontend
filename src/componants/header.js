import React, { Component } from 'react'
import Logo from './home/img/logo.png';
// import Profile from  "./profile";
import { withAuth0 } from '@auth0/auth0-react';


export class Header extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
const Array=['hebaalmomani1998@gmail.com','raghadalboriny@gmail.com','Amneh99el@gmail.com'];
// const { user } = this.props.auth0;
// const isadmin = isAuthenticated.email;
        return (
            <div>
                <header>
        <div class="logo-container">
            <img src= {Logo} alt=""/>
        </div>
            <nav >
              <div class="bar">
                <a href="../home" class="bar-item active">Home</a>
                <a href="../category" class="bar-item">Categories</a>
                {
                  isAuthenticated &&
<a href="../profile" class="bar-item ">profile</a>

              }
              {
                isAuthenticated && Array.includes('hebaalmomani1998@gmail.com','raghadalboriny@gmail.com','Amneh99el@gmail.com') &&
<a href="../admin" class="bar-item ">admin</a>

              }
               
<a href="../Aboutus/Cards/Cardtest" class="bar-item ">About us</a>
              </div>
            </nav>
    </header>
            </div>
        )
    }
}

export default withAuth0(Header)
