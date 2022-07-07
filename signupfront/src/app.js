import React from 'react'
import { Routes,Route} from 'react-router-dom'
import './app.css'
import Studentnote from './pages/studentNote'
import Userdetails from './pages/userDetails'
import Userlogin from './pages/userLogin'
import Userregister from './pages/userRegister'
import Adminlogin from './pages/adminLogin'
import Navbar  from './Navbar'

import Home from './Home'


const App = () => {

    
    
    return (
        <div>
            
            
                
                <Navbar/>
                <Routes>
                <Route  path="/"  exect element={<Home/>} />
                    <Route  path="/studentNote"  exect element={<Studentnote/>} />
                    <Route  path="/userdetails"  exect element={<Userdetails/>} />
                    <Route  path="/userlogin"  exect element={<Userlogin/>} />
                    <Route  path="/userregister"  exect element={<Userregister/>} />
                    <Route  path="/adminlogin"  exect element={<Adminlogin/>} />

                </Routes>
                    
                    

             

            
            
        </div>
        
        
    )
    }
    

export default App ;