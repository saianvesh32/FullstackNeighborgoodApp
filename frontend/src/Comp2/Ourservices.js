import React from 'react'
import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"
import service4 from "../assets/service4.jpg"
import "./Ourservices.css"
import { FaExpandAlt } from "react-icons/fa";
const Ourservices = () => {
  const data=[
    {
      image:service1,
      content:"Connect ,Discover and Attend: Meet your neighbors"
    },{
      image:service2,
      content:"Connect with neighbors, Discover local events"
    },
    {
      image:service3,
      content:"Build your Neighbors, Network Join now"
    },
    {
      image:service4,
      content:"Get Nearby support Around you easily"
    }
  ]
  return (
    <div id='ourservices'>
      <div class="forhead">
        <h1 class="head2">Our Services</h1>
        </div>
    <div className='tot'>
       {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.image} alt="" />
            </div>
            <h3>{service.content}</h3>
            <div >
            <FaExpandAlt className="exp"/>
            </div>
           
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Ourservices
