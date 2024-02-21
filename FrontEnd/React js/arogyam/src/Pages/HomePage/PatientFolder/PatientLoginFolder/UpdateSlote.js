import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function UpdateSlotes(){
    const navigate = useNavigate();

const [SlotesData,setSlotesData]=useState([])
const [message,setmessage]=useState("")
const [Did,setDid]=useState()
const [AppointmentDate,setAppointmentDate]=useState()
const [Pid,setPid]=useState()
const [AvailableSlotes,setAvailableSlotes] =useState([]);
const [StartTimeSlot,setStartTimeSolt] =useState();
    const [EndTimeSlot,setEndTimeSolt] =useState();
    useEffect(() => {

        if(localStorage.getItem("Pid")==null){
            navigate("/PatientLogin")
        }else{
          navigate("/UpdateSlotes")
        }
        let url="http://localhost:8080/timetable/getBookedSlotByPatient/key?key="+localStorage.getItem("Pid");
        fetch(url).then((response)=>{
            if(response.ok)
            return response.json();
            
        }).then((data)=>{
           console.log(data)
           if(data)
           setSlotesData(data)    
           
        })
        },[]);

const SeeAllAvailableSlotes=()=>{
    console.log(Did)
    console.log(AppointmentDate)

    try{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": Did,
                "dateOfAppointment":  AppointmentDate
            } )
        };
        fetch('http://localhost:8080/timetable/getslot', requestOptions)
            .then(response => response.json())
            .then( (data)=>{
                console.log(data)
               setAvailableSlotes(data)
            })
    }catch(e){
        console.log(e);
    }
}
const finallyUpdateThatSlote=()=>{
    alert("Do You want to Update ")
    console.log(StartTimeSlot)
    console.log(EndTimeSlot)
        console.log(StartTimeSlot)
        console.log(EndTimeSlot)
     
        try{
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "bookId": {
                        "did": Did,
                        "date": AppointmentDate,
                        "pid": Pid
                    },
                    "start": StartTimeSlot,
                    "end": EndTimeSlot
                } )
            };
            fetch('http://localhost:8080/timetable/saveTheApointment', requestOptions)
                .then(response => response.json())
                .then( 
                    navigate("/PatietAfterLoginLayout"))
        }catch(e){
            console.log(e);
        }
}
    return(
        <>
        

        <h3 className="text-center text-danger mt-3">{message}</h3>
        {SlotesData.map((Attr,key)=>{
            return(
                <>
                
                <table className="table  table-bordered border border-dark  text-center m-auto w-75 mb-3">
                       <thead className="table-dark">
                       <tr>
                      <th>Did</th>
                      <th>Date</th>
                      <th>Pid</th>
                      <th>Start</th>
                      <th>End</th>
                      <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td> {Attr.bookId.did}</td>
                           <td>{Attr.bookId.date}</td>
                           <td>{Attr.bookId.pid}</td>
                           <td>{Attr.start}</td>
                           <td>{Attr.end}</td>
                           <td><input  type={"button"} value={"See All The Apointment To Update"} className="btn btn-danger" onClick={e=>{
                               setDid(Attr.bookId.did)
                               setAppointmentDate(Attr.bookId.date)
                               setPid(Attr.bookId.pid)
                               }} onDoubleClick={e=>{SeeAllAvailableSlotes()}}/></td>
                          
                       </tr>
                   </tbody>
                   </table>
               </>    
                
              )
        })}
<div className="bg-white container-sm  border table-responsive border-2 w-75 mb-3 mt-4 border-warning border-4">
  
  <div className="row p-3">
{Object.keys(AvailableSlotes).map((innerAttr, index) => {
        
        return (
            <>
            <div className="col-lg-3">
            <Button  className="m-3"onDoubleClick={finallyUpdateThatSlote}
            onClick={e=>{setStartTimeSolt(innerAttr)
                setEndTimeSolt(AvailableSlotes[innerAttr])}} 
            >{innerAttr} - {AvailableSlotes[innerAttr]}</Button>
            </div>
            </>
         
        )})
        
    }
    </div>
     
       </div>

       <div className=" d-flex justify-content-center">
                  <button className="btn btn-warning m-3"><Link to={"/PatietAfterLoginLayout"}>Back</Link></button>
                 </div>
        </>
    )

}
export default UpdateSlotes;