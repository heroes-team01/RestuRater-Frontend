import React from 'react';
import Form from 'react-bootstrap/Form';
import typeOfFood from './Restrunt.json';




class FormF extends  React.Component{

    dataFilter = (event) =>{
           let formSelected = parseInt(event.target.value);
           let data = typeOfFood;
            if(formSelected){
                data =typeOfFood.filter((item) =>formSelected===item.id);

            }
            this.props.filteredData(data);

        }




    render(){


        return(
            <>

                <Form className='form'>


                    <Form.Group aria-label="Default select example">
                        <Form.Label className='para'>Choose type of Restrunt you want:</Form.Label>
                        <Form.Control className='formColor' as='select' onChange={this.dataFilter}>
                        <option>All</option>
                        <option value="1">Asian</option>
                        <option value="2">Italian</option>
                        <option value="3">Indian</option>
                        <option value="5">Middle East</option>
                        <option value="6">Pizza</option>
                        <option value="7">American</option>
                        <option value="4">Mexican</option>
                        </Form.Control>
                    </Form.Group>

                </Form>
            

             
            </>

        )
    }
}


export default FormF ;