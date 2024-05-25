import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Headers from './Components/Headers';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Neighborgood from './Comp2/Neighborgood';
import Ourservices from './Comp2/Ourservices';
import About from './Comp2/About';
import Postcard from './Comp2/Postcard';
import Connect from './Comp2/Connect';
import GetStarted from './Comp2/Getstarted';
import Interestform from "./Comp2/Interestform"
import Info from './Comp2/Info';
import PostForm from './Comp2/PostForm';
import Postinfo from './Comp2/Postinfo';
const ProtectedRoute = ({ children, auth=false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;
  const navigate = useNavigate();
  if(!isLoggedIn && auth) {
    return <navigate to={'/users/login'} />
  }else if(isLoggedIn && ['/users/login', '/users/signup'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <navigate to={'/dashboard'} />
  }

  return children
}

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Neighborgood />} />
        <Route path='/users/login' element={
        // <ProtectedRoute>
            <Login isSignInPage={true}/>
        // </ProtectedRoute>
      } />
      <Route path='/users/signup' element={
        // <ProtectedRoute>
        <Login isSignInPage={false}/>
      // </ProtectedRoute>
      } />
        {/* <Route path='/login' element={<Login isSignInPage={true}/>} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/users/Neighborgood' element={<Neighborgood />} />
        <Route path='/users/Ourservices' element={<Ourservices />} />
        <Route path='/users/Connect' element={<Connect />} />
        <Route path='/users/Postcard' element={<Postcard />} />
        <Route path='/users/About' element={<About />} /> */}
        <Route path='/users/getstarted' element={<GetStarted />} />
        <Route path='/users/interestform' element={<Interestform/>} />
        <Route path='/users/info' element={<Info/>} />
        <Route path='/users/postform' element={<PostForm/>} />
        <Route path='/users/postinfo' element={<Postinfo/>} />
        <Route path='*' element={<Error />} />
        {/* <Route path='/signup'element={<Login isSignInPage={false}/>}/> */}
      </Routes>
    </>
  );
}

export default App;
