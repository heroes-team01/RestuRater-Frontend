// import logo from './logo.svg';
import './App.css';
import Aboutus from './componants/Aboutus/Aboutus';
import Indexview from './componants/dashboard/Indexview';
import { BrowserRouter as Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

function App() {
  return (

    <div>
      <Route path='/Aboutus'>
        <Aboutus />
      </Route>
      <Route path='/admin'>
      <Indexview />
      </Route>
      
    </div>
  
  );
}

export default App;
