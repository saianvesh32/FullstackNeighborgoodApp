import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Neighborgood from '../Comp2/Neighborgood';
import Ourservices from '../Comp2/Ourservices';
import Postcard from '../Comp2/Postcard';
import Connect from '../Comp2/Connect';
import About from '../Comp2/About';
import ScrollToTop from '../Comp2/ScrollToTop';
const Dashboard = () => {

  const navigate = useNavigate();

//   const getUser = async () => {
//     try {
//         const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
//         console.log("response",response)
//     } catch (error) {
//       navigate("*")
//     }
// }


// useEffect(() => {
//   getUser()
// }, [])
  return (
    <div>
      
      <ScrollToTop/>
       <Neighborgood/>
       <Ourservices/>
       <Connect/>
       <Postcard/>
       <About/>
       </div>
  )
}

export default Dashboard