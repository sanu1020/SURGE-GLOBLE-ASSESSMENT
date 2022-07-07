import React, { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './userDetails.css'




function App() {


const [ListofUsers, setListofUsers] = useState([])





   

    useEffect(() => {
        axios.get('http://localhost:4000/app/userData')
            .then((response) => {
                setListofUsers(response.data)
            }).catch((ERR) => {
                console.log(ERR)
            })
    }, [])


    return (
        <div className="container shadow my-5">
            <div className="row">
                
            </div>
            <div className="col-md-6 p-5">
            
            
            {ListofUsers.map((val) => {
                return (
                   
                    <table >
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Date Of Birth</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Account Type</th>


                        
                    </tr>
                    
                    <tr>
                        <td>{val._id} </td>
                        <td>{val.firstname} </td>
                        <td>{val.lastname} </td>
                        <td>{val.email} </td>
                        <td>{val.DateOfBirth} </td>
                        <td>{val.mobile} </td>
                        <td>{val.status} </td>
                        <td>{val.accounttype} </td>


               

                    </tr>
                </table>
                )
            })}
            </div>

            
           
           
                
        </div>
           
        

    );

}


export default App;