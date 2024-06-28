// import React, { useEffect, useState } from 'react'
// import "./header.css"
// import { NavLink } from "react-router-dom"
// import axios from "axios"

// const Headers = () => {
//     const [userdata, setUserdata] = useState({});
//     console.log("response", userdata)

//     // const getUser = async () => {
//     //     try {
//     //         console.log("hello");
//     //         const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
//     //         console.log(response.data.user)
//     //         setUserdata(response.data.user)
//     //     } catch (error) {
//     //         console.log("error", error)
//     //     }
//     // }

//     // logoout
    
//     const getUser = async () => {
//         try {
//             console.log("hello");
//             const response = await fetch("http://localhost:6005/login/success", {
//                 method: 'GET',
//                 credentials: 'include'
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setUserdata(data.user);
//                 console.log(data.user);
//             } else {
//                 console.log("Failed to fetch user data");
//                 setUserdata(null);
//             }
//         } catch (error) {
//             console.log("error", error);
//             setUserdata(null); // Ensure it's set to null on error
//         }
//     };

//     const logout = ()=>{
//         window.open("http://localhost:6005/logout","_self")
//     }

//     useEffect(() => {
//         getUser()
//     }, [])
//     return (
//         <>
//             <header>
//                 <nav>
//                     <div className="left">
//                         <h1>Harsh Pathak</h1>
//                     </div>
//                     <div className="right">
//                         <ul>
//                             <li>
//                                 <NavLink to="/">
//                                     Home
//                                 </NavLink>
//                             </li>
//                             {
//                                 Object?.keys(userdata)?.length > 0 ? (
//                                     <>
//                                     <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
//                                         <li>
//                                             <NavLink to="/dashboard">
//                                                 Dashboard
//                                             </NavLink>
//                                         </li>
//                                         <li onClick={logout}>Logout</li>
//                                         <li>
//                                             <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
//                                         </li>
//                                     </>
//                                 ) : <li>
//                                     <NavLink to="/users/login">
//                                         Login
//                                     </NavLink>
//                                 </li>
//                             }
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }

// export default Headers

import React, { useEffect, useState } from 'react';
import "./header.css";
import { NavLink } from "react-router-dom";

const Headers = () => {
    const [userdata, setUserdata] = useState(null); // Initialize with null

    const getUser = async () => {
        try {
            // console.log("hello");
            const token = localStorage.getItem('user:token');
            if (token) {
                const userDetails = JSON.parse(localStorage.getItem('user:detail'));
                setUserdata(userDetails);
                return;
            }
            const response = await fetch("http://localhost:6005/login/success", {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setUserdata(data.user);
                console.log(data.user);
            } else {
                console.log("Failed to fetch user data");
                setUserdata(null);
            }
        } catch (error) {
            console.log("error", error);
            setUserdata(null); // Ensure it's set to null on error
        }
    };

    const logout = () => {
        localStorage.removeItem('user:token');
        localStorage.removeItem('user:detail');
        window.open("http://localhost:6005/logout", "_self");
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <header>
                <nav>
                    <div className="right">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            {userdata ? (
                                <>
                                    <li>
                                    <a href="#neighborgood">neighborgood</a>
                                        {/* <NavLink to="#neighborgood">Neigborgood</NavLink> */}
                                    </li>
                                    <li>
                                    <a href="#ourservices">services</a> 
                                    </li>
                                    <li>
                                    <a href="#connect">connectus</a> 
                                    </li>
                                    <li>
                                    <a href="#postcard">postcard</a> 
                                    </li>
                                    <li>
                                    <a href="#about">About</a> 
                                    </li>
                                    <li onClick={logout}>Logout</li>
                                    <li>
                                        <img src={userdata.image} style={{ width: "50px", borderRadius: "50%" }} alt="User Profile" />
                                    </li>
                                    <li style={{ color: "black", fontWeight: "bold" }}>{userdata.displayName}</li>
                                </>
                            ) : (
                                <li>
                                    <NavLink to="/users/login">Login</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Headers;
