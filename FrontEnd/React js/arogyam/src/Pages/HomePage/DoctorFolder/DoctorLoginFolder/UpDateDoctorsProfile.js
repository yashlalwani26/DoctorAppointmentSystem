import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './updatedoc.css';
import validator from 'validator'

function UpDateDoctorProfile(){

    const navigate =useNavigate()
    const[Did,setDid]=useState();
    const[Qualifications,setQualifications]=useState([]);
    const[password,setpassword]=useState();
    const [confirmpassword,setconfirmpassword] = useState("");
    const[email,setemail]=useState("");
    const[pincode,setpincode]=useState();
    const[fees,setfees]=useState();
    const[practice_start_year,setpractice_start_year]=useState();
    //const[profile_pic,setDoctor]=useState([]);
    const[state,setstate]=useState("");
    const[country,setcountry]=useState("");
    const[first_name,setfirst_name]=useState("");
    const[course_no,setcourse_no]=useState();
    const[middle_name,setmiddle_name]=useState("");
    const[gender,setgender]=useState("M");
    const[city,setcity]=useState("");
    const[dob,setdob]=useState();
    const[area,setarea]=useState("");
    const[last_name,setlast_name]=useState("");
    const[mob_no,setmob_no]=useState();
    const[specialisation,setspecialisation]=useState("");
    const[langauges,setlangauges]=useState("");
    const [Submitbutton,setSubmitbutton]=useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const [ErrorForConfirmPassword, setErrorForConfirmPassword] = useState('')
    
    const checkValidation=()=>{
        if(first_name!=""&&middle_name!=""&&last_name!=""&&email!=""&&password!=""
            &&city!=""&&state!=""&&country!=""&&dob!=null&&mob_no!=""&&pincode!=null&&gender!=null&&langauges!=""&specialisation!=""
            ){
    
                
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

    useEffect(() => {

        if(localStorage.getItem("Did")==null){
          navigate("/DoctorLogin")
        }
        },[]);
function getAllTheCourse(){

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
useEffect(() => {
    let url="http://localhost:8080/doctor/getOneDoc/id?id="+localStorage.getItem("Did");
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
      return(
        console.table(data),
       console.log(data),
       setfirst_name(data.first_name),
       setmiddle_name(data.middle_name),
       setlast_name(data.last_name),
            setarea(data.area),
        setpincode(data.pincode),
        setfees(data.fees),
            setcity(data.city),
         setstate(data.state),
        setcountry(data.country),
        setmob_no(data.mob_no),
        setspecialisation(data.specialisation),
       setlangauges(data.langauges),
      setemail(data.email),
      setpassword(data.password),
      setdob(data.dob),
      setpractice_start_year(data.practice_start_year),
      setDid(data.did),
      setgender(data.gender),
      console.log(data.course_no),
      setcourse_no(data.course_no)
      )
    })
    },[]);
function UpdateDoctor(event){
        // Simple POST request with a JSON body using fetch
        event.preventDefault();
        console.log("inside update doctor")
        console.log(course_no)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "area": area,
                "city": city,
                "country": country,
                'course_no': course_no,
                'did': Did,
                'dob': dob,
                'email': email,
                'fees': fees,
                'first_name': first_name,
                'gender': gender,
                'langauges': langauges,
                'last_name': last_name,
                'middle_name':middle_name,
                'mob_no':mob_no,
                'password': password,
                'pincode':pincode,
                'practice_start_year': practice_start_year,
                'specialisation':specialisation,
                'state': state
            } )
        };
        fetch('http://localhost:8080/doctor/updateDoctor', requestOptions)
            .then(response => response.json())
            .then( navigate('/DoctorLoginLayout'))
}


    return(
        <>
      
            <div className="container-sm  formcover p-4  w-50   m-auto shadow  mb-5 mt-5 bg-white rounded">



                <h2 className='text-center'>Update Profile</h2>
                <form className="mt-4 " onSubmit={UpdateDoctor}>
          
                        <div className="row  ">
                            <label>Name</label> 
                            <div className='col-lg-4'>
                            
                            <input type="text" className="me-2  form-control" id="dFName" placeholder="First Name" onBlur={checkValidation} value={first_name}  onChange={e=>checkForName(e)} />
                            </div>
                            <div className='col-lg-4'>
                            <input type="text" className=" me-2 form-control" id="dMName" placeholder="Middle Name" onBlur={checkValidation} value={middle_name}  onChange={e=>checkForMiddleName(e)} />
                            </div>
                            <div className='col-lg-4'>
                            <input type="text" className=" form-control" id="dLName" placeholder="Last Name" onBlur={checkValidation} value={last_name}  onChange={e=>checkForLastName(e)} />
                            </div>
                        </div>

                        <div className="row  mt-3 Address">
                        <div className='col-lg-4'>
                            <label htmlFor="text" className="form-label"> Area </label>
                            <input type="text" className="form-control col-lg-4" id="dArea" onBlur={checkValidation} value={area}  onChange={e=>checkForArea(e)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="dCity" className="form-label"  > City </label>
                            <input type="text" className="form-control col-lg-4" id="dCity" onBlur={checkValidation} value={city}  onChange={e=>checkForCity(e)} />
                            </div>
                         
                            <div className='col-lg-4'>
                            <label htmlFor="dState" className="form-label"> State </label>
                            <input type="text" className="form-control col-lg-4" id="dState" onBlur={checkValidation} value={state}  onChange={e=>checkForState(e)}/>
                            </div>
                            </div>
                            <div className="row mt-2 Address2">
                            <div className='col-lg-4'>
                            <label htmlFor="Country" className="form-label"> Country </label>
                            <input type="text" className="form-control col-lg-4" id="Country" onBlur={checkValidation} value={country}  onChange={e=>checkForCountry(e)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="dPincode" className="form-label"> Pincode </label>
                            <input type="text" className="form-control col-lg-4" id="dPincode" onBlur={checkValidation} placeholder = "Enter 6 digit"value={pincode}  onChange={e=>checkPinCode(e)}/>
                            </div>
                            </div>
                            <div className="row  mt-3">
                            <div className='col-lg-4'> 
                            <label htmlFor="dMobNo" className="form-label"> Mobile No. </label>
                            <input type="number" className="form-control col-lg-4" id="dMobNo" placeholder = "Enter 10 digit" onBlur={checkValidation} value={mob_no}  onChange={e=>checkMobileNumber(e)}/>
                             </div>     
                            <div className='col-lg-4'>
                            <label htmlFor="dEmail" className="form-label"> Email Id</label>
                            <input type="email" className="form-control col-lg-4" id="dEmail" onBlur={checkValidation} value={email} onChange={e=>setemail(e.target.value)} />
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="Langauge" className="form-label"> Langauge </label>
                            <input type="Langauge" className="form-control col-lg-4" id="Langauge"  onBlur={checkValidation} value={langauges} onChange={e=>checkforlangauge(e.target.value)} />
                            </div>

                           </div>
                           <div className="row mt-2 Address2">      
                   <div className='col-lg-3'>
                  
            <label htmlFor="Langauge" className="form-label"> Date of Birth</label>
            <input type="date" className="form-control col-lg-4" id="Langauge" onBlur={checkValidation} value={dob} onChange={e=>setdob(e.target.value)} />
            </div>
            <div className='col-lg-3'>

            
            <label htmlFor="Langauge" className="form-label"> practice_start_year</label>
            <input type="date" className="form-control col-lg-4" id="Langauge" onBlur={checkValidation} value={practice_start_year} onChange={e=>setpractice_start_year(e.target.value)} />
            </div>
              

            <div className='col-lg-3 '> 
            <label className='form-label ms-2 '>Gender :</label>
            <select className='form-control' onChange={e=>setgender(e.target.value)}     >
            <option value={"M"}>Male</option>
            <option value={"F"}>Female</option>
            <option value={"O"}>Other</option>
            </select>   
            </div>
            </div>
                    <div className="row  mt-3">
                    <div className='col-lg-4'>
                            <label htmlFor="specialization" className="form-label"> Specialization </label>
                            <input type="text" className="form-control col-lg-4" id="specialization" onBlur={checkValidation} value={specialisation}  onChange={e=>checkForSpecialisation(e.target.value)}/>
                            </div>
                            <div className='col-lg-4'>
                            <label htmlFor="consultation_fees" className="form-label"> Consultation fees</label>
                            <input type="number" className="form-control col-lg-4" id="consultation_fees" onBlur={checkValidation} value={fees} onChange={e=>setfees(e.target.value)}/>
                            </div>
                            <div className='mt-4 col-lg-4'>Medical Course

                            <select className='form-control' onChange={e=>setgender(e.target.value)}     >
                            <option value={"MBBS"}>MBBS</option>
                            <option value={"MD"}>MD</option>
                            <option value={"Physio"}>Physiotherapy</option>
                            <option value={"Dental"}>Dental degree</option>
                            <option value={"Other"}>Other</option>
                            </select>  
                    {/* <select id = "dropdown" onClick={getAllTheCourse} onChange={e=>setcourse_no(e.target.value)} >
            
                    {Qualifications.map((innerAttr,key)=>{
                        return(
                            <>
                            <option value={innerAttr.id}>{innerAttr.medicalCourse}</option>
                            </>
                        )
                    })}
                        </select> */}
                        </div>
                            </div>   
                           
                        <div className='text-center'>
                        <input className=' btn btn-success' type={"submit"} name={"submit"} disabled={Submitbutton}></input>
                        </div>

                        <div className="text-center">
                        <button className="btn btn-warning m-3 "><Link to={"/DoctorLoginLayout"}>Back</Link></button>
                        </div>    
                </form>
            </div> 

        </>

    )
}

export default UpDateDoctorProfile;