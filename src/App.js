// import logo from './logo.svg';
import './App.css';
import Indexview from './componants/dashboard/Indexview';
// import Cards from './componants/Aboutus/Cards/Cards';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardtest from './componants/Aboutus/Cards/Cardtest';
// import axios from 'axios';

function App() {
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
      </Switch>
      </Route>
    </div>
  
  );
}

export default App;
