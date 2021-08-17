import React, { Component } from 'react'
import Logo from './home/img/logo.png';

export class Header extends Component {
    render() {
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
                <a href="../Aboutus/Cards/Cardtest" class="bar-item ">About us</a>
              </div>
            </nav>
    </header>
            </div>
        )
    }
}

export default Header
