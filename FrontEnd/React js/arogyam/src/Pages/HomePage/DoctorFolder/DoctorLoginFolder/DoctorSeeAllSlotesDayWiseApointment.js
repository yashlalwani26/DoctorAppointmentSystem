import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const DoctorSeeAllSlotesDayWise=()=>{
    const [DID, setDID] = useState();
    const [TimeSlote, setTimeSlote] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        if(localStorage.getItem("Did")==null){
            navigate("/DoctorLogin")
        }else{
          
          let url="http://localhost:8080/timetable/getBookedSlotMadeByDoctorsDailly/key?key="+localStorage.getItem("Did");
          console.log(url)
          fetch(url).then((response)=>{
              return response.json();
          }).then((data)=>{
             setTimeSlote(data)
             console.log(data)
          }).catch(err=>{
              console.log("About error" + err)
          })

        }
        },[]);
    function getAllSlotes(event){
   console.log(DID)
        event.preventDefault();
         
     }
return(
    <>
    
    <div className="container-sm  text-center p-3  w-50   m-auto shadow  mb-5 mt-5 bg-white rounded">
    <form   onSubmit={getAllSlotes}>
    <div className="form-group ">
    <h2>  <label className='form-label me-2'>Doctor id:  </label>{localStorage.getItem("Did")}</h2>
 </div>

 </form>
 </div>
 <table>
                 <thead>
                 <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Slot Duration</th>
                <th>Break Start Time</th>
                <th>Break End Time</th>
                <th>Date Of Appointments</th>  
                 </tr>
             </thead>
    {TimeSlote.map((innerAttr,key)=>{
        return(
          <>
        
             <tbody>
                 <tr>
                     <td> {innerAttr.start_Time}</td>
                     <td>{innerAttr.end_Time}</td>
                     <td>{innerAttr.slotDuration}</td>
                     <td>{innerAttr.breakTime_start}</td>
                     <td>{innerAttr.breakTime_end}</td>
                     <td>{innerAttr.dockey.dateOfAppointment}</td>
                 </tr>
             </tbody>
             
         </>    
          
        )
    })}
    </table>
    <h1><Link to={'/DoctorLoginLayout'}>Go Back</Link></h1>
    </>
)
}
export default DoctorSeeAllSlotesDayWise;