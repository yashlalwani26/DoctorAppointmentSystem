import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import "./DocLogin.css"


const DoctorLogin =()=>{
  const navigate = useNavigate();
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[Msg,setMsg] = useState();
  useEffect(() => {

    if(localStorage.getItem("Did")!=null){
      navigate("/DoctorLoginLayout")
    }
    },[]);
  
  function getUser(event){
    console.log("inside doctor login")
    event.preventDefault();
     let url="http://localhost:8080/doctor/LoginDoctor/email/password?email="+email+"&password="+password;
     fetch(url)
     .then((response)=>{
      console.log(response);
      if(response.ok){
         return response.json;
        }})
     .then((data)=>{
      if(data){
        // console.table(data)

        console.log(data)
       
          localStorage.setItem("Did",data.did)
          navigate('/DoctorLoginLayout')
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
   
    
     <Link className="m-2" to="/DoctorRegister"> Register</Link>
     <div className=" d-flex justify-content-start">
        <button className="btn btn-warning m-4"><Link to={"/"}>Back</Link></button>
      </div>
  </form>

</div>

</div>

<Outlet/>

        {/*
<Form onSubmit={getUser}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
        </Form>*/}
        </>
    )
 
}



export default DoctorLogin;