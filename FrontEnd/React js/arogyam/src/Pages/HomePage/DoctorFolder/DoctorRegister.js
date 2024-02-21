
import { Collapse } from 'bootstrap';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator'
function DoctorRegister(){
    const[first_name,setfirst_name]=useState("");
    const[middle_name,setmiddle_name]=useState("");
    const[last_name,setlast_name]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword] = useState("");
    const[Doctor,setDoctor]=useState([]);
    const[Qualifications,setQualifications]=useState([]);
    const[pincode,setpincode]=useState();
    const[fees,setfees]=useState();
    const[practice_start_year,setpractice_start_year]=useState(0);
    //const[profile_pic,setDoctor]=useState([]);
    const[state,setstate]=useState("Maharastra");
    const[country,setcountry]=useState("India");
    // const[course_no,setcourse_no]=useState("");
    const[course_no,setcourse_no]=useState();
    const[gender,setgender]=useState("M");
    const[city,setcity]=useState("Pune");
    const[dob,setdob]=useState(0);
    const[area,setarea]=useState("Akurdi");
    const[mob_no,setmob_no]=useState("");
    const[specialisation,setspecialisation]=useState("");
    const[langauges,setlangauges]=useState("English");
    const[msg,setMessage]=useState();
    const navigate = useNavigate();
    const [Submitbutton,setSubmitbutton]=useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const [ErrorForConfirmPassword, setErrorForConfirmPassword] = useState('')
    const[EmailMessage,setEmailMessage]=useState("");
 
    const checkValidation=()=>{
    if(first_name!=""&&middle_name!=""&&last_name!=""&&email!=""&&confirmpassword!=""&&password!=""
        &&city!=""&&state!=""&&country!=""&&dob!=null&&mob_no!=""&&pincode!=null&&gender!=null&&langauges!=""&specialisation!=""
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
                // if(event.length==""){
                //     setmiddle_name("")
                // }
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
    function checkForArea(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setarea(event)
            }else{
                if(event.length==""){
                    setarea("")
                }
            }  
        }
    }
    function checkForCity(event){

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
    function checkforlangauge(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setlangauges(event)
            }else{
                if(event.length==""){
                    setlangauges("")
                }
            }
        }
    }
    function checkForSpecialisation(event){
        if(event.length<=255){
            var letters = /^[A-Za-z\s]+$/;
            if(event.match(letters))
            { 
             setspecialisation(event)
            }else{
                if(event.length==""){
                    setspecialisation("")
                }
            }
        }
    }
    function checkMobileNumber(event){
        if(event.target.value.length<=10){
            setmob_no(event.target.value)
        }
       
    }

    function checkPinCode(event){
        if(event.target.value.length<=6){
            setpincode(event.target.value)
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
function getAllTheCourse(event){
    event.preventDefault();
    let url="http://localhost:8080/doctor/OneToMany";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      return(
        console.table(data),
       console.log(data),
       setQualifications(data)
      )
    })
}
function checkForEmailAddress(event){
    event.preventDefault();
  
    console.log("After setting =" +email)
    
    let url='http://localhost:8080/doctor/CheckForEmail/email?email='+email;
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
function CreateDoctor(event){
    event.preventDefault();
       
        // Simple POST request with a JSON body using fetch
        console.log("area = "+area)
        console.log(city)
        console.log(country)
        // console.log(course_no)
        console.log(pincode)
        console.log(dob)
        console.log(email)
        console.log(fees)
        console.log(first_name)
        console.log(gender)
        console.log(langauges)
        console.log(last_name)
        console.log(middle_name)
        console.log(mob_no)
        console.log(password)
        console.log(JSON.stringify(practice_start_year).substring(1,11) )
        console.log(specialisation)
        console.log(state)
        console.log(course_no)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                 "course_no": (course_no),
                //"Course_no":qualifi,
                "area": area,
                "city": city,
                "state": state,
                "country": country,
                "pincode":pincode,
                "dob": dob,
                "email": email,
                "fees": fees,
                "first_name": first_name,
                "last_name": last_name,
                "middle_name":middle_name,
                 "gender": gender,
                "langauges": langauges,
                "mob_no":mob_no,
                "password": password,
                "practice_start_year": practice_start_year,
                "specialisation":specialisation,
                "profile_pic": null,
            } )
        };
    
        fetch('http://localhost:8080/doctor/addDoctor', requestOptions)
            .then()
            .then(
                    navigate('/DoctorLoginLayout')
               )
}
    return(
        <>
    
        <div className="container-sm  formcover p-4  w-50   m-auto shadow  mb-5 mt-5 bg-white rounded">



<h2 className='text-center'>Create Profile</h2>
<form className="mt-4 " onSubmit={CreateDoctor}>

<div className="row  ">
                            <label>Name</label> 
                            <div className='col-lg-4'>
                            
                            <input type="text" className="me-2  form-control" id="dFName" placeholder="First Name" onBlur={checkValidation} value={first_name}  onChange={e=>checkForName(e.target.value)} />
                            </div>
                            <div className='col-lg-4'>
                            <input type="text" className=" me-2 form-control" id="dMName" placeholder="Middle Name" onBlur={checkValidation} value={middle_name}  onChange={e=>checkForMiddleName(e.target.value)} />
                            </div>
                            <div className='col-lg-4'>
                            <input type="text" className=" form-control" id="dLName" placeholder="Last Name"  onBlur={checkValidation} value={last_name}  onChange={e=>checkForLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="row  mt-3 Address">
                        <div className='col-lg-4'>
                            <label htmlFor="text" className="form-label"> Area </label>
                            <input type="text" className="form-control col-lg-4" id="dArea" onBlur={checkValidation} value={area}  onChange={e=>checkForArea(e.target.value)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="dCity" className="form-label"  > City </label>
                            <input type="text" className="form-control col-lg-4" id="dCity" onBlur={checkValidation} value={city}  onChange={e=>checkForCity(e.target.value)} />
                            </div>
                         
                            <div className='col-lg-4'>
                            <label htmlFor="dState" className="form-label"> State </label>
                            <input type="text" className="form-control col-lg-4" id="dState" onBlur={checkValidation} value={state}  onChange={e=>checkForState(e.target.value)}/>
                            </div>
                            </div>
                            <div className="row mt-2 Address2">
                            <div className='col-lg-4'>
                            <label htmlFor="Country" className="form-label"> Country </label>
                            <input type="text" className="form-control col-lg-4" id="Country" onBlur={checkValidation} value={country}  onChange={e=>checkForCountry(e.target.value)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="dPincode" className="form-label"> Pincode </label>
                            <input type="number" className="form-control col-lg-4" id="dPincode" placeholder = "Enter 6 digit"value={pincode}  onChange={e=>checkPinCode(e)}/>
                            </div>
                            </div>
                            <div className="row  mt-3">
                            <div className='col-lg-4'> 
                            <label htmlFor="dMobNo" className="form-label"> Mobile No. </label>
                            <input type="tel" className="form-control col-lg-4" id="dMobNo" placeholder = "Enter 10 digit" onBlur={checkValidation} value={mob_no}  onChange={e=>checkMobileNumber(e)}/>
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
                            <label htmlFor="Langauge" className="form-label"> Langauge </label>
                            <input type="Langauge" className="form-control col-lg-4" id="Langauge" onBlur={checkValidation} value={langauges} onChange={e=>checkforlangauge(e.target.value)} />
                            </div>

                           </div>
                           
                   <div className='col-lg-4'>
            <label htmlFor="Langauge" className="form-label"> Date of Birth</label>
            <input type="date" className="form-control col-lg-4" id="Langauge" onBlur={checkValidation} value={dob} onChange={e=>setdob(e.target.value)} />
     

            
            <label htmlFor="Langauge" className="form-label"> practice_start_year</label>
            <input type="date" className="form-control col-lg-4" id="Langauge" onBlur={checkValidation} value={practice_start_year} onChange={e=>setpractice_start_year(e.target.value)} />
            </div>
                

            <div className='col-lg-4 '> 
            <label className='form-label me-2 mt-2'>Gender :</label>
            <select onChange={e=>setgender(e.target.value)}     >
            <option value={"M"}>Male</option>
            <option value={"F"}>Female</option>
            <option value={"O"}>Other</option>
            </select>   
            </div>
                    <div className="row  mt-3">
                    <div className='col-lg-4'>
                            <label htmlFor="specialization" className="form-label"> Specialization </label>
                            <input type="text" className="form-control col-lg-4" id="specialization"  value={specialisation}  onChange={e=>checkForSpecialisation(e.target.value)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="consultation_fees" className="form-label"> Consultation fees</label>
                            <input type="number" className="form-control col-lg-4" id="consultation_fees" value={fees} onChange={e=>setfees(e.target.value)}/>
                            </div>
                         <div className='mt-4 col-lg-4'>Medical Course
                         <select id = "dropdown" onClick={getAllTheCourse} onChange={e=>setcourse_no(e.target.value)} >
                         <option value={"MBBS"}>MBBS</option>
                            <option value={"MD"}>MD</option>
                            <option value={"Physio"}>Physiotherapy</option>
                            <option value={"Dental"}>Dental degree</option>
                            <option value={"Other"}>Other</option>
                         </select>
                        </div>
                            </div>   
                            <div className="row mb-4 mt-3">
                            <div className='col-lg-4'>
                            <label htmlFor="password" className="form-label"> Password </label>
                            <input type="password" className="form-control col-lg-4" id="password" onBlur={checkValidation} value={password}  onChange={e=>checkForPassWord(e.target.value)}/>
                            <span style={{fontWeight: 'bold',color: 'red',}}>{errorMessage}</span>
                            </div>

                            <div className='col-lg-4'>
                            <label htmlFor="password" className="form-label">Confirm Password </label>
                            <input type="password" className="form-control col-lg-4" id="password" onBlur={checkValidation}   onChange={e=>checkForConfirmPassWord(e.target.value)}/>
                            <span style={{fontWeight: 'bold',color: 'red',}}>{ErrorForConfirmPassword}</span>
                            </div>
                            </div>  
                        <div className='text-center'>
                        <input className=' btn btn-success' type={"submit"} name={"submit"} disabled={Submitbutton}></input>
                        
                        </div>
                        <h1><Link to={'/DoctorLogin'}>Go Back</Link></h1>
</form>
</div> 

        </>

    )
}

export default DoctorRegister;