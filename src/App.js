// import logo from './logo.svg';
import './App.css';
import Aboutus from './componants/Aboutus';
import { BrowserRouter as Route } from 'react-router-dom';

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
