import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Discover from './components/Discover';
import MyGames from './components/MyGames'
import Browse from './components/Browse';
import Login from './components/Login';

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/discover" element={<Discover />}/>
            <Route path="/mygames" element={<MyGames />}/>
            <Route path="/browse" element={<Browse />}/>
            <Route path="/login" element={<Login />}/>

          </Routes>
        </NavBar>
      </BrowserRouter>
  );
}

export default App;
