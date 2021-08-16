import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
        <div class="logo-container">
            {/* <img src= {logo} alt=""/> */}
            <p class="main-logo">Restu<span>Rater</span>
            </p>
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
