import { useState } from "react";
import axios from "axios";


import "./Register.css"
function App() {

    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[email,setEmail] = useState("")
    const[DateOfBirth,setDateOfBirth] = useState("")
    const[mobile,setMobile] = useState("")
    const[status,setStatus] = useState("")
    const[password,setPassword] = useState("")
    const[accounttype,setAccounttype] = useState("")


    const registerUser= () => {
    try {
      axios.post("http://localhost:4000/app/userRegister",{
            firstname:firstname,
            lastname:lastname,
            email : email,
            DateOfBirth:DateOfBirth,
            mobile:mobile,
            status:status,
            password:password,
            accounttype:accounttype

        })
        window.location.href = '/userlogin'
        

      } catch (error) {
            console.log(error)
        }
      }



  return (
    <div className="container shadow my-5">
       <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
          <form>

          <div class="mb-3">
              <label for="exampleInputfirstname" class="form-label">First Name</label>
              <input type="text" class="form-control" id="exampleInputfirstname" aria-describedby="emailHelp" value={firstname} onChange={(event) => {
            setFirstname(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputlastname" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="exampleInputlastname" aria-describedby="emailHelp" value={lastname} onChange={(event) => {
            setLastname(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event) => {
            setEmail(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputDateOfBirth" class="form-label">Date Of Birth</label>
              <input type="date" class="form-control" id="exampleInputDateOfBirth" aria-describedby="emailHelp" value={DateOfBirth} onChange={(event) => {
            setDateOfBirth(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputmobile" class="form-label">Mobile</label>
              <input type="text" class="form-control" id="exampleInputmobile" aria-describedby="emailHelp" value={mobile} onChange={(event) => {
            setMobile(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputStatus" class="form-label">Status</label>
              <input type="text" class="form-control" id="exampleInputStatus" aria-describedby="emailHelp" value={status} onChange={(event) => {
            setStatus(event.target.value)
          }}/></div>

          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
            </div>    


          
            <div class="mb-3">
              <label for="exampleInputAccounttype" class="form-label">Account Type</label>
              <input type="text" class="form-control" id="exampleInputAccounttype" aria-describedby="emailHelp" value={accounttype} onChange={(event) => {
            setAccounttype(event.target.value)
          }}/></div>
                
            
            
            
            <button onClick={registerUser} type="submit" class="btn btn-outline-dark w-50">Register</button>
          </form>
        </div>
      </div>

          
          
          
          

          
     
      
    
  );
}

export default App;
