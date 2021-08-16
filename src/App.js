
import './App.css';
import Indexview from './componants/dashboard/Indexview';
import Cards from './componants/Aboutus/Cards/Cards';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (

    <div>
      <Route>
      <Switch>
      <Route path='/Aboutus'>
        <Cards />
      </Route>
      <Route path='/admin'>
      <Indexview />
      </Route>
      </Switch>
      </Route>
    </div>
  
  );
}

export default App;
