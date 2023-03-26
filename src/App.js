import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.components';
import Home from './pages/home.pages';
import Login from './pages/login.pages';
import Register from './pages/register.pages';
import Services from './pages/services.pages';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path ="/" exact element={<Home/>}/>
          <Route path ="/login" exact element={<Login/>}/>
          <Route path ="/services" exact element={<Services/>}/>
          <Route path ="/register" exact element={<Register/>}/>
        </Routes>
      </Router>
      

    </div>
   
    </>
  )
}

export default App;
