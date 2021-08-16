import React from "react";
import Category from "./category"
import Form from "./selectedRest";
// import Profile from  "./profile";
import { withAuth0 } from '@auth0/auth0-react';
import Logo from './home/img/logo.png';

class Main extends React.Component{

    render(){
      const { isAuthenticated } = this.props.auth0;

        return( 
            <div>
<header>
        <div class="logo-container">
            <img src= {Logo} alt=""/>
            {/* <p class="main-logo">Restu<span>Rater</span>
            </p> */}
        </div>
            <nav >
              <div className="bar">
                <a href="../home" class="bar-item active">Home</a>
                <a href="../category" class="bar-item">Categories</a>
                {
                isAuthenticated &&
<a href="./profile" class="bar-item ">profile</a>

              }
                <a href="../Aboutus/Cards/Cardtest" class="bar-item ">About us</a>
              </div>
            </nav>
    </header>
            <Form filteredData={this.props.filteredData}/>
            <div className="totalCards">
         { this.props.restData.map((item)=>{
                return (
                   
                    <Category title={item.title} address={item.address} type={item.type} image_url={item.image_url}
                    description={item.description}
                    showCard={this.props.showCard} 
                   />
                   
                   )


            })
          
            }
  </div>
    </div>
        )
    };
}

export default withAuth0(Main);