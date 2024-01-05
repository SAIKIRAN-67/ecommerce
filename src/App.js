import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/Home"
import Cart from"./components/Cart"
import About from"./components/About"
import Shop  from "./components/Shop"
import Contact from "./components/Contact"
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
