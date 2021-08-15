// import logo from './logo.svg';
import React from "react";
import './App.css';
import Indexview from './componants/dashboard/Indexview';
// import Cards from './componants/Aboutus/Cards/Cards';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rest from './componants/Restrunt.json';
import Main from "./componants/Main";
import Cardtest from './componants/Aboutus/Cards/Cardtest';
// import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    data: rest ,
    }
  }

  filteredData = (data) =>{
    this.setState({data });
  }


  render() {
  return (

    <div>
      <Route>
      <Switch>
      <Route path='/Aboutus'>
        <Cardtest />

        {/* <Cards /> */}
        

      </Route>
      <Route path='/admin'>
      <Indexview />
      </Route>
      <Route path='/category'>
      <Main restData={this.state.data} filteredData={this.filteredData}/>
      </Route>
      </Switch>
      </Route>
    </div>
  
  );
}
}

export default App;
