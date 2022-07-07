import axios from "axios";
import { useState } from "react";
import './login.css'
import ErrorMessage from "../components/ErrorMessage";
import { NavLink } from "react-router-dom";

function App() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const loginUser = async (event) => {
    event.preventDefault()

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }


      setLoading(true)
      const { data } = await axios.post('http://localhost:4000/app/userLogin',
        {
          email,
          password,
        },
        config
      );
      
      localStorage.setItem("userInfo", JSON.stringify(data))
      window.location.href = '/studentNote'
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)
    }
  }




  return (
    <div className="container shadow my-5">
      <div className="row">
        <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
          <h1 className="display-4 fw-bolder">Welcome Back</h1>
          <p className="lead text-center">Enter Your Credentials To Login</p>
          <h5 className="mb-4">OR</h5>
          <NavLink to='/userRegister' className='btn btn-outline-light pb-2 w-50'>Register</NavLink>
        </div>
        <div className="col-md-6 p-5">
          <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
          <form>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <loading />}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event) => {
            setEmail(event.target.value)
          }}/>
                
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
            </div>
            
            <button onClick={loginUser} type="submit" class="btn btn-outline-dark   w-50">Login</button>
          </form>
        </div>
      </div>


      </div>
  );
}

export default App;
