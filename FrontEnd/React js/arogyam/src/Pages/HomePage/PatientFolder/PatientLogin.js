import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function PatientLogin(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[Msg,setMsg] =useState();
  useEffect(() => {

  if(localStorage.getItem("Pid")==null){
      navigate("/PatientLogin")
  }
  },[]);

  function getUser(event){
    console.log(email)
    console.log(password)
    

   event.preventDefault();
    let url="http://localhost:8080/patient/patientLogin/email/password?email="+email+"&password="+password;
    fetch(url).then((response)=>{
      console.log(response.status)
      if(response.ok)
        return response.json();
    }).then((data)=>{
      if(data){
     
          console.table(data)
         console.log(data.pid)
        //  <Link to={{pathname:"/PatietAfterLoginLayout" ,state: {data}}}></Link>
      
        localStorage.setItem("Pid",data.pid)
        
       navigate("/PatietAfterLoginLayout")
       setMsg("")
        
      }
    }).catch(err=>{
      setMsg("Please Enter Correct User Name And PassWord")
    })
}
    return(
        <>
       
       <div className="container con" id="container">

<div className="form-container sign-in-container">
  <form className="forml"onSubmit={getUser}>
    <h1 className="mb-3">Sign in</h1>
    <h6 className="text-danger">{Msg}</h6>
  
    <input type="email" id="email" placeholder="Email"  onChange={e => setEmail(e.target.value)} required/>
    <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required  />
    
    <button className="m-2 buttonn"type="submit">Sign In</button>
   
    
     <Link className="m-2" to="/RegisterPatient"> Register</Link>
     <div className=" d-flex justify-content-start">
        <button className="btn btn-warning m-4"><Link to={"/"}>Back</Link></button>
      </div>
  </form>
</div>

</div>

        </>
    )
}
