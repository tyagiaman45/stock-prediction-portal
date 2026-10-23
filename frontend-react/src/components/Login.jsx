import React,{useState,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from '../AuthProvider'

const Login = () => {
  const[username,SetUsername]=useState("")
  const[password,SetPassword]=useState("")
  const[errors,setErrors]=useState()
  const navigate=useNavigate()
  const{isLoggedIn,setIsLoggedIn}= useContext(AuthContext)

  const handleLogin=async (e)=>{
    e.preventDefault();

    const userData={
      username,password
    }
    console.log(userData);
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
        console.log('login sucess');
        setIsLoggedIn(true)
        navigate('/')
        
      
    }catch(error){
      console.error('invalid credential')
      setErrors('invalid credential')
    }
    
  }
  
  return (
    <>
    
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 bg-light-dark" style={{ width: "550px" }}>
        <h2 className="text-center mb-4 text-light">Login to Stock Prediction Portal</h2>
      <form onSubmit={handleLogin}> 

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Username"
          value={username}
          onChange={(e)=>SetUsername(e.target.value)}
        />

        

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
        />
        {errors && <div className='text-danger'>{errors}</div>}

      

        <button className="btn btn-info">Login</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login