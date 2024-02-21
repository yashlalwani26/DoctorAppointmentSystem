
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import validator from 'validator'
function RegisterPatient(){
    const navigate = useNavigate();
    const [first_name,setfirst_name] = useState("");
    const [middle_name,setmiddle_name] = useState("");
    const [last_name,setlast_name] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmpassword,setconfirmpassword] = useState("");
    const [Address,setAddress] = useState("Akurdi");
    const [city,setcity] = useState("pune");
    const [state,setstate] = useState("Maharashtra");
    const [country,setcountry] = useState("India");
    const [dob,setdob] = useState();
    const [mobileNumber,setmobileNumber] = useState();
    const [pin,setpin] = useState();
    const [gender,setgender] = useState("M");
    const [booldgroup,setbooldgroup] = useState("A+");
    const [Msg,setMsg] =  useState("");
    const [Submitbutton,setSubmitbutton]=useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const [ErrorForConfirmPassword, setErrorForConfirmPassword] = useState('')
    const[EmailMessage,setEmailMessage]=useState("");
    const checkValidation=()=>{
     if(first_name!=null&&middle_name!=null&&last_name!=null&&email!=null&&password!=null&&confirmpassword!=null&&Address!=null
        &&city!=null&&state!=null&&country!=null&&dob!=null&&mobileNumber!=null&&pin!=null&&gender!=null&&booldgroup!=null
        ){
            if(confirmpassword===password){
                setSubmitbutton(false)
            }
            else{
                setSubmitbutton(true)
            }
        }else{
            setSubmitbutton(true)
        }
        
    } 
    function checkForName(event){
        console.log(event)
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
          setpassword(value)
        } else {
          setErrorMessage('Is Not Strong Password')
        }
       
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

      function checkForEmailAddress(event){
        event.preventDefault();
      
        console.log("After setting =" +email)
        
        let url='http://localhost:8080/patient/checkForEmail/email?email='+email;
        fetch(url).then((response)=>{
            return response.text();
        }).then((data)=>{
            if(data.match(email)){
                console.log(email)
                setemail("")
                console.log("")
                setEmailMessage("User Already Present Please Log in")
                checkValidation() 
                
            }else{
    
                setEmailMessage("email Address is valid You can proceed")
                checkValidation()
            }
           
         
        })
    }

const createNewPatient=(event)=>{
event.preventDefault();
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

console.log(state)
const requestOptions = {
    method: 'POST',
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

        'pinCode': pin,
        'profilepic': null,
        'state': state
    } )
};
fetch('http://localhost:8080/patient/addPatient', requestOptions)
    .then(response => response.json())
    .then( (data)=>
    {
        navigate("/PatietAfterLoginLayout")
        
    }
   )
    .catch((err)=>{
        setMsg("profile not Created");
    })
}

    return(
        <>   
        <div className="container-sm  formcover p-4  w-50   m-auto shadow  mb-5 mt-5 bg-white rounded">



<h2 className='text-center'>Register Profile</h2>
<form className="mt-4 " onSubmit={createNewPatient}>
    <div>

        
                        
    </div>
        <div className="row  ">
            <label>Name</label> 
            <div className='col-lg-4'>
            
            <input type="text" className="me-2  form-control" id="dFName" placeholder="First Name" onBlur={checkValidation} value={first_name}  onChange={e=>checkForName(e.target.value)} />
            </div>
            <div className='col-lg-4'>
            <input type="text" className=" me-2 form-control" id="dMName" placeholder="Middle Name"  onBlur={checkValidation}  value={middle_name}  onChange={e=>checkForMiddleName(e.target.value)} />
            </div>
            <div className='col-lg-4'>
            <input type="text" className=" form-control" id="dLName" placeholder="Last Name"  onBlur={checkValidation}  value={last_name} onChange={e=>checkForLastName(e.target.value)} />
            </div>
        </div>

        <div className="row  mt-3 Address">
        <div className='col-lg-4'>
            <label htmlFor="Country" className="form-label"> Country </label>
            <input type="text" className="form-control col-lg-4" id="Country"  placeholder = "Enter Country"  onBlur={checkValidation} value={country} onChange={e=>checkForCountry(e.target.value)}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dState" className="form-label"> State </label>
            <input type="text" className="form-control col-lg-4" id="dState"  placeholder = "Enter State" value={state} onChange={e=>checkForState(e.target.value)}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dCity" className="form-label"  > City </label>
            <input type="text" className="form-control col-lg-4" id="dCity"  placeholder = "Enter City" value={city}  onBlur={checkValidation}  onChange={e=>checkForCity(e.target.value)} />
            </div>
         
            
            </div>
            <div className="row mt-2 Address2">
            
            <div className='col-lg-4'>
            <label htmlFor="text" className="form-label"> Area </label>
            <input type="text" className="form-control col-lg-4" id="dArea"  placeholder = "Enter Area"  onBlur={checkValidation} value={Address} onChange={e=>{checkForAddress(e.target.value)}}/>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="dPincode" className="form-label"> Pincode </label>
            <input type="number" className="form-control col-lg-4" id="dPincode" placeholder = "Enter Pincode"  onBlur={checkValidation}  value={pin}  onChange={e=>checkPinCode(e)}/>
            </div>
            </div>
            <div className="row  mt-3">
            <div className='col-lg-4'> 
            <label htmlFor="dMobNo" className="form-label"> Mobile No. </label>
            <input type="number" className="form-control col-lg-4" id="dMobNo" placeholder = "Enter 10 digit"  onBlur={checkValidation}  value={mobileNumber}  onChange={e=>{checkMobileNumber(e)}}/>
             </div>     
            <div className='col-lg-4'>
            <label htmlFor="dEmail" className="form-label"> Email Id</label>
            
            <input type="email" className="form-control col-lg-4" id="dEmail" onBlur={checkForEmailAddress} value={email} 
                            onChange={e=>
                                setemail(e.target.value)
                               
                        } />
                        <h5>{EmailMessage}</h5>
            </div>
            <div className='col-lg-4'>
            <label htmlFor="Langauge" className="form-label"> Date of Birth</label>
            <input type="date" className="form-control col-lg-4" id="Langauge"   onChange={e=>setdob(e.target.value)} />
            </div>
           </div>
           


   
           <div className="row  mt-3">      

                <div className='col-lg-4 '> 
                <label className='form-label me-2 mt-2'>Gender :</label>
                <select onChange={e=>setgender(e.target.value)}     >
                <option value={"M"}>Male</option>
                <option value={"F"}>Female</option>
                <option value={"O"}>Other</option>
                </select>   
                </div>


                <div className='col-lg-4 '> 
                <label className='form-label me-2 mt-2'>Blood Group :</label>
                <select onChange={e=>setbooldgroup(e.target.value)}     >
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
               
            <div className="row mb-4 mt-1">
            <div className='col-lg-4'>
            <label htmlFor="password" className="form-label"> Password </label>
            <input type="password" className="form-control col-lg-4" id="password"  onBlur={checkValidation}   onChange={(e) => checkForPassWord(e.target.value)}/>
            <span style={{fontWeight: 'bold',color: 'red',}}>{errorMessage}</span>
            </div>
      
            <div className='col-lg-4'>
            <label htmlFor="password" className="form-label">Confirm Password </label>
            <input type="password" className="form-control col-lg-4" id="password"  onBlur={checkValidation}   onChange={e=>{checkForConfirmPassWord(e.target.value)}}/>
            <span style={{fontWeight: 'bold',color: 'red',}}>{ErrorForConfirmPassword}</span>
            </div>
            </div>  

            

        <div className='text-center'>
        <input className=' btn btn-success' type={"submit"} name={"submit"} disabled={Submitbutton}></input>
        <h3><Link to={"/PatientLogin"}>For Login Click Here</Link></h3>
        </div>
        
</form>
</div> 
    <h1>{Msg}</h1>
       
        </>
    )
}
export default RegisterPatient;