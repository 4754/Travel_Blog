
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'; 
import Home from '../src/components/pages/Home';
import Services from '../src/components/pages/Services';
import Products from '../src/components/pages/Products';
import SignUp from '../src/components/pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element = {< Home/>}/>
            <Route path='/Services' element = {<Services/>}/>
            <Route path='/Products' element = {<Products/>}/>
            <Route path='/sign-up' element = {<SignUp/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
