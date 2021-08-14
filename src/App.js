// import logo from './logo.svg';
import './App.css';

import Aboutus from './componants/Aboutus';
import { BrowserRouter as Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  return (
<div>
<Route path='/Aboutus'>
<Aboutus />
            </Route>
  
</div>
  );
}

export default App;
