import React,{useState} from "react"
import axios from 'axios'

function Register() {
  const[username,SetUsername]=useState("")
  const[email,SetEmail]=useState("")
  const[password,SetPassword]=useState("")
  const[errors,setErrors]=useState({})


  const handleRegistration = async (e)=>{
    e.preventDefault();
    
    const userData={
      username,email,password
    }
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log('response data=>',response.data);
      console.log('registration sucessfull');
      setErrors({})
      
      
      }catch(error){
        setErrors(error.response.data)
      console.log("registration error",error.response.data);
      

    }

  }
  
  return (
    <>
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 bg-light-dark" style={{ width: "550px" }}>
        <h2 className="text-center mb-4 text-light">Create an Account</h2>
      <form onSubmit={handleRegistration}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Username"
          value={username}
          onChange={(e)=>SetUsername(e.target.value)}
        />
        <small>{errors.username && <div className="text danger">{errors.username}</div>}</small>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
        />
          <small>{errors.password && <div className="text danger">{errors.password}</div>}</small>

      

        <button className="btn btn-info">Register</button>
      </form>
      </div>
    </div>
    </>
  );
}

export default Register;