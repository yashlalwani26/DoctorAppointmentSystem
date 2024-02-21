import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
function CreateAdmin(){
const[email,setEmail] =useState();
const[Name,setName] =useState();
const[passWord,setpassword] =useState();
const navigate = useNavigate();
useEffect(()=>{
    if(localStorage.getItem("Aid")==null){
      navigate("/CreateAdmin")
    }
  },[])
function addAdmin(event){
    console.log(email)
    console.log(Name)
    console.log(passWord)
    event.preventDefault()
    const requestOptions={
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({   
            "email": email,
            "name": Name,
            "passWord": passWord
        } )
    }
    fetch('http://localhost:8080/admin/addAdmin',requestOptions)
    .then(response=>response.json)
    .then((data)=>{
        navigate("/AdminPageLayout")
    })
}
    return(
        <>
              <div className="container con" id="container">

<div className="form-container sign-in-container">
  <form className="forml"onSubmit={addAdmin}>
    <h1 className="mb-3">Create Admin</h1>
    {/* <h6 className="text-danger">{Msg}</h6> */}
  
    <input type="email" id="email" placeholder="Email"  onChange={e => setEmail(e.target.value)} required/>
    <input type="name" id="Name" placeholder="Name" onChange={e => setName(e.target.value)} required  />
    <input type="password" id="password" placeholder="Password" onChange={e => setpassword(e.target.value)} required  />
    <button className="m-2 buttonn"type="submit">Add Admin</button>

     <div className=" d-flex justify-content-start">
        <button className="btn btn-warning m-4"><Link to={"/AdminPageLayout"}>Back</Link></button>
      </div>
  </form>
</div>

</div>

        {/*
        <form onSubmit={addAdmin}>
        <h3>Email Id</h3><input type={"text"} onChange={e=>setEmail(e.target.value)}></input>
        <h3>Name</h3><input type={"text"} onChange={e=>setName(e.target.value)}></input>
        <h3>Password</h3><input type={"text"} onChange={e=>setpassword(e.target.value)}></input>
        <h3><button type="submit">Submit</button></h3>
        </form>*/}
        </>
    )
}
export default CreateAdmin;