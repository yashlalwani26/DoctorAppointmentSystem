import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useLocation } from "react-router-dom";

function AdminPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Message, setMessage] = useState([]);
  const location = useLocation();
  useEffect(()=>{
    if(localStorage.getItem("Aid")!=null){
      navigate("/CreateAdmin")
    }
  },[])

  function getUser(event){
    console.log(email)
    console.log(password)
   event.preventDefault();
    let url="http://localhost:8080/admin/Login/email/password?email="+email+"&password="+password;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      return(
        console.table(data),
       console.log(data),
      localStorage.setItem("Aid",data.aid),
      navigate("/AdminPageLayout")
      )
    }).catch((err)=>{
      setMessage("Please Enter Correct email and password")
    })
}
    return(
        <>
              <div className="container con" id="container">

<div className="form-container sign-in-container">
  <form className="forml"onSubmit={getUser}>
    <h1 className="mb-3">Sign in</h1>
    <h6 className="text-danger">{Message}</h6>
  
    <input type="email" id="email" placeholder="Email"  onChange={e => setEmail(e.target.value)} required/>
    <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required  />
    
    <button className="m-2 buttonn"type="submit">Sign In</button>
   
    {/* changed */}
     <Link className="m-2" to={"/CreateAdmin"}> Register</Link>
     <div className=" d-flex justify-content-start">
        <button className="btn btn-warning m-4"><Link to={"/"}>Back</Link></button>
      </div>
  </form>
</div>
</div>
        </>
    )
}
export default AdminPage