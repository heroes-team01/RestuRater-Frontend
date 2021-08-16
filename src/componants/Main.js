import React from "react";
import Category from "./category"
import Form from "./selectedRest";

class Main extends React.Component{

    render(){
        return( 
            <div>
<header>
        <div class="logo-container">
            {/* <img src= {logo} alt=""/> */}
            <p class="main-logo">Restu<span>Rater</span>
            </p>
        </div>
            <nav >
              <div className="bar">
                <a href="../home" class="bar-item active">Home</a>
                <a href="../category" class="bar-item">Categories</a>
                <a href="../Aboutus/Cards/Cardtest" class="bar-item ">About us</a>
              </div>
            </nav>
    </header>
            <Form filteredData={this.props.filteredData}/>

         { this.props.restData.map((item)=>{
                return (
                    <Category title={item.title} address={item.address} type={item.type} image_url={item.image_url}
                    description={item.description}
                    showCard={this.props.showCard} 
                   ></Category>
                   
                   )


            })}

    </div>
        )
    };
}

export default Main;