import React from "react";
import Category from "./category"
import Form from "./selectedRest";

class Main extends React.Component{

    render(){
        return( 
            <div>

            <Form filteredData={this.props.filteredData}/>

         { this.props.restData.map((item)=>{
                return (
                    <Category title={item.title} address={item.address} type={item.type} image_url={item.image_url}
                    type={item.type}
                   ></Category>
                   
                   )


            })}

    </div>
        )
    };
}

export default Main;