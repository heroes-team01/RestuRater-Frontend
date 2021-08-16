import React from "react";
import Category from "./category";


class Main extends React.Component{

    render(){
        return( 
        <div>
             { this.props.hornedData.map((item)=>{
                    return (
                    <Category name={item.name} address={item.address} photograph={item.photograph}></Category>
                    )


                })}

        </div>
        )
    };
}

export default Main;
