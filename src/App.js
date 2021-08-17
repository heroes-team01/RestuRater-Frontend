// import logo from './logo.svg';
import React from "react";
import './App.css';
import Indexview from './componants/dashboard/Indexview';
// import Cards from './componants/Aboutus/Cards/Cards';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rest from './componants/Restrunt.json';
import Main from "./componants/Main";
import Home from "./componants/home/home";
import Cardtest from './componants/Aboutus/Cards/Cardtest';
import ModelCard from "./componants/model";
import Profile from  "./componants/profile";
import { withAuth0 } from '@auth0/auth0-react';


// import axios from 'axios
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    data: rest ,
    showingData: {}
    }
  }
  showCard = (values) => {

    this.setState({
    selected:true,
    showingData:values,
  });
  }

  hideCard = () => {
    this.setState({
    selected: false});
}


  filteredData = (data) =>{
    this.setState({data });
  }


  render() {
    const { isAuthenticated } = this.props.auth0;

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
      <Main showCard={this.showCard} restData={this.state.data} filteredData={this.filteredData}/>
      <ModelCard selected={this.state.selected} showingData={this.state.showingData} hideCard={this.hideCard} />
      </Route>
                         
  <Route path="/profile">


      {
        isAuthenticated &&
        <Profile />

      }
        </Route>
          <Route path='/'>
          <Home/>
          </Route>
                              {/* <Route exact path="/profile">
              {isAuthenticated ? <Profile /> : "hiiiiiii"}
            </Route> */}
                             


              {/* <Profile /> */}
      </Switch>
      </Route>
      <Route path='/profile'></Route>
    </div>
  
  );
}
}

export default withAuth0(App);