
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import validator from 'validator'
function UpdatePatient(){
    const navigate = useNavigate();
    const [first_name,setfirst_name] = useState("");
    const [middle_name,setmiddle_name] = useState("");
    const [last_name,setlast_name] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmpassword,setconfirmpassword] = useState();
    const [Address,setAddress] = useState("");
    const [city,setcity] = useState("");
    const [state,setstate] = useState("");
    const [country,setcountry] = useState("");
    const [dob,setdob] = useState();
    const [mobileNumber,setmobileNumber] = useState("");
    const [pin,setpin] = useState("");
    const [gender,setgender] = useState("M");
    const [booldgroup,setbooldgroup] = useState("A+");
    const [pid,setpid] = useState("");
    const [Submitbutton,setSubmitbutton]=useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const [ErrorForConfirmPassword, setErrorForConfirmPassword] = useState('')
    const checkValidation=()=>{
console.log()
        if(first_name!=""&&middle_name!=""&&last_name!=""&&email!=""&&password!=""&&Address!=""
           &&city!=""&&state!=""&&country!=""&&dob!=""&&mobileNumber!=""&&pin!=""&&gender!=""&&booldgroup!=""
           )
           {
                   setSubmitbutton(false)
              
           }else{
               setSubmitbutton(true)
           }
       } 
       function checkForName(event){
   
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
                setfirst_name(event)
            }else{
                if(event.length==""){
                    setfirst_name("")
                }
            }
            
        }
       }
       function checkForMiddleName(event){
   
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setmiddle_name(event)
            }else{
                if(event.length==""){
                    setmiddle_name("")
                }
            }
            
        }
       }
   
       function checkForLastName(event){
   
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setlast_name(event)
            }else{
                if(event.length==""){
                    setlast_name("")
                }
            }
            
        }
       }
       function checkForCountry(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setcountry(event)
            }else{
                if(event.length==""){
                    setcountry("")
                }
            }
            
        }
    }
    function checkForState(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setstate(event)
            }else{
                if(event.length==""){
                    setstate("")
                }
            }
        }
    }
    function checkForCity(event){
        console.log(event)
        console.log("inside event")
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setcity(event)
            }else{
                if(event.length==""){
                    setcity("")
                }
            }
            
        }
    }

    function checkForAddress(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setAddress(event)
            }else{
                if(event.length==""){
                    setAddress("")
                }
            }
            
        }
    }
   
       function checkMobileNumber(event){
           if(event.target.value.length<=10){
               setmobileNumber(event.target.value)
           }
          
       }
       function checkPinCode(event){
           if(event.target.value.length<=6){
               setpin(event.target.value)
           }
           
       }
       const checkForPassWord = (value) => {
    
           if (validator.isStrongPassword(value, {
             minLength: 8, minLowercase: 1,
             minUppercase: 1, minNumbers: 1, minSymbols: 1
           })) {
             setErrorMessage('Is Strong Password')
          
           } else {

             setErrorMessage('Is Not Strong Password')
           }
           setpassword(value)
          
         }
         const checkForConfirmPassWord=(value)=>{
               if(value === password){
                   setErrorForConfirmPassword('password matched')
                   setconfirmpassword(value)
               }else{
                   setErrorForConfirmPassword("not matched")
                   setconfirmpassword("")
               }
            
         }

useEffect(() => {
    // if(localStorage.getItem("Pid")==null){
    //     navigate("/PatientLogin")
    // }else{
    //   navigate("/UpdatePatient")
    // }
    // Update the document title using the browser API
   console.log("called")
   let url="http://localhost:8080/patient/one/Pid?Pid="+localStorage.getItem("Pid");
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      return(
        console.table(data),
       console.log(data),
       setfirst_name(data.first),
       setmiddle_name(data.middle),
       setlast_name(data.last),
            setAddress(data.area),
        setpin(data.pinCode),
            setcity(data.city),
         setstate(data.state),
        setcountry(data.country),
        setmobileNumber(data.mobileNo),
      setemail(data.emailID),
      setpassword(data.password),
      setdob(data.dob),
      setgender(data.gender),
      setpid(data.pid),
      setbooldgroup(data.bloodGroup)
      )
    })
  },[]);

const UpdatePatientDetails=()=>{

console.log(Address)
console.log(booldgroup)
console.log(city)
console.log(country)
console.log(dob)
console.log(email)
console.log(first_name)
console.log(gender)
console.log(last_name)
console.log(middle_name)
console.log(pid)
console.log(state)
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({   
        'area': Address,
        'bloodGroup': booldgroup,
        'city': city,
        'country': country,
        'dob': dob,
        'emailID': email,
        'first': first_name,
        'gender': gender,
        'last': middle_name,
        'middle': middle_name,
        'mobileNo': mobileNumber,
        'password': password,
        'pid': localStorage.getItem("Pid"),
        'pinCode': pin,
        'profilepic': null,
        'state': state
    } )
};
fetch('http://localhost:8080/patient/updatePatient', requestOptions)
    .then(response => response.json())
    .then( navigate("/PatietAfterLoginLayout"))
    .catch((err)=>{
        console.log(err)
    })
}



    return(
        <>   
        <div className="container-sm  formcover p-4  w-50   m-auto shadow  mb-5 mt-5 bg-white rounded">



<h2 className='text-center'>Update Profile</h2>
<form className="mt-4 " onSubmit={UpdatePatientDetails}>
    <div>

        
                        
    </div>
        <div className="row  ">
            <label>Name</label> 
            <div className='col-lg-4'>
            
            <input type="text" className="me-2  form-control" id="dFName" placeholder="First Name"  onBlur={checkValidation}  value={first_name}  onChange={e=>checkForName(e.target.value)} />
            </div>
            <div className='col-lg-4'>
            <input type="text" className=" me-2 form-control" id="dMName" placeholder="Middle Name"  onBlur={checkValidation}  value={middle_name}  onChange={e=>checkForMiddleName(e.target.value)} />
            </div>
            <div className='col-lg-4'>
            <input type="text" className=" form-control" id="dLName" placeholder="Last Name"  onBlur={checkValidation}  value={last_name}  onChange={e=>checkForLastName(e.target.value)} />
            </div>
        </div>

        <div className="row  mt-3 Address">
        <div className='col-lg-4'>
            <label htmlFor="Country" className="form-label"> Country </label>
            <input type="text" className="form-control col-lg-4" id="Country"  onBlur={checkValidation}  value={country} placeholder = "Enter Country" onChange={e=>checkForCountry(e.target.value)}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dState" className="form-label"> State </label>
            <input type="text" className="form-control col-lg-4" id="dState"  onBlur={checkValidation}  value={state} placeholder = "Enter State" onChange={e=>checkForState(e.target.value)}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dCity" className="form-label"  > City </label>
            <input type="text" className="form-control col-lg-4" id="dCity"  onBlur={checkValidation}  value={city} placeholder = "Enter City" onChange={e=>checkForCity(e.target.value)} />
            </div>
         
            
            </div>
            <div className="row mt-2 Address2">
            
            <div className='col-lg-4'>
            <label htmlFor="text" className="form-label"> Area </label>
            <input type="text" className="form-control col-lg-4" id="dArea"  onBlur={checkValidation}  value={Address} placeholder = "Enter Area" onChange={e=>checkForAddress(e.target.value)}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dPincode" className="form-label"> Pincode </label>
            <input type="number" className="form-control col-lg-4" id="dPincode"  onBlur={checkValidation}  placeholder = "Enter Pincode"value={pin}  onChange={e=>checkPinCode(e)}/>
            </div>
            </div>
            <div className="row  mt-3">
            <div className='col-lg-4'> 
            <label htmlFor="dMobNo" className="form-label"> Mobile No. </label>
            <input type="number" className="form-control col-lg-4" id="dMobNo" placeholder = "Enter 10 digit"   onBlur={checkValidation}  value={mobileNumber}  onChange={e=>checkMobileNumber(e)}/>
             </div>     
            <div className='col-lg-4'>
            <label htmlFor="dEmail" className="form-label"> Email Id :</label>
            <label className='form-control'>{email}</label>
            
            </div>
            <div className='col-lg-4'>
            <label htmlFor="Langauge" className="form-label"> Date of Birth</label>
            <input type="date" className="form-control col-lg-4" id="Langauge"  onBlur={checkValidation}  value={dob} onChange={e=>setdob(e.target.value)} />
            </div>
           </div>
           


   
           <div className="row  mt-3">      

                <div className='col-lg-4 '> 
                <label className='form-label me-2 mt-2'>Gender :</label>
                <select className='form-control' onChange={e=>setgender(e.target.value)}    onClick={checkValidation} >
                <option value={"M"}>Male</option>
                <option value={"F"}>Female</option>
                <option value={"O"}>Other</option>
                </select>   
                </div>

                <div className='col-lg-4 '> 
                <label className='form-label me-2 mt-2'>Blood Group :</label>
                <select className='form-control' onChange={e=>setbooldgroup(e.target.value)}    onClick={checkValidation} >
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"C+"}>C+</option>
                <option value={"C-"}>C-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                </select>   
                </div>
   </div>
               
            
        <div className='text-center'>
        <input className=' btn btn-success' type={"submit"} name={"submit"} disabled={Submitbutton}></input>
        </div>
        <div className=" d-flex justify-content-center">
                  <button className="btn btn-warning m-3"><Link to={"/PatietAfterLoginLayout"}>Back</Link></button>
         </div>
</form>
</div> 
    

        </>
    )
}
export default UpdatePatient;