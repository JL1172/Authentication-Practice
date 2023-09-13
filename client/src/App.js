import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login"; 
import { StyledLogin } from './components/styling/styledComponents';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import UserComponent from './components/UserComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import Logout from './components/Logout';
import PrivateRoute from './components/ProtectedRoute';

function App() {
  const navigate = useNavigate(); 
  return (
    <StyledLogin className="App">
      <div id = "links">
      <Link to="/login"><span className='material-symbols-outlined'>login</span>Login</Link>
      <Link to="/Logout"><span className='material-symbols-outlined'>logout</span>Logout</Link>
      <Link to="/protected"><span className='material-symbols-outlined'>person</span>User Info</Link>
    </div>
    <div id = "routes">
    <Routes>
      <Route path = "/protected" element = {<ProtectedRoute/>}/>
      <Route path = "/login" element = {<Login navigate = {navigate}/>}/>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/logout" element = {<Logout />} />
    </Routes>
    </div>
    </StyledLogin >

  );
}

export default App;
