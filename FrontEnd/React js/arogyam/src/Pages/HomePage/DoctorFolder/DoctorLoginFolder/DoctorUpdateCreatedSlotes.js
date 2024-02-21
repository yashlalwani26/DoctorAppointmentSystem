import { useEffect, useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link, useNavigate } from 'react-router-dom';

const DoctorUpdateCreatedSlotes =()=>{

    const [StartTime, setStartTime] = useState();
    const [EndTime, setEndTime] = useState();
    const [BreakStartTime, setBreakStartTime] = useState();
    const [BreakendTime, setBreakendTime] = useState();
    const [SlotDuration, setSlotDuration] = useState();
    const [DateOfAppointment, setDateOfAppointment] = useState();
    const [Msg, setMsg] = useState();
    // var date1 = new Date(DateOfAppointment, BreakStartTime)
    // var date2 = new Date(DateOfAppointment, BreakendTime)
    const navigate = useNavigate();
    useEffect(() => {

      if(localStorage.getItem("Did")==null){
        navigate("/DoctorLogin")
      }
      },[]);
    const createNewslotes = (event) =>{
        event.preventDefault();
        console.log(StartTime)
        console.log(EndTime)
        console.log(BreakStartTime)
        console.log(BreakendTime)
        console.log(SlotDuration)
        console.log(JSON.stringify(DateOfAppointment).substring(1,11))
        // Simple POST request with a JSON body using fetch
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                "dockey": {
                    "dateOfAppointment": JSON.stringify(DateOfAppointment).substring(1,11),
                    "id": localStorage.getItem("Did")
                },
                "slotDuration": SlotDuration,
                "breakTime_start": BreakStartTime,
                "end_Time": EndTime,
                "breakTime_end": BreakendTime,
                "start_Time": StartTime
            } )
        };
        fetch('http://localhost:8081/timetable/addSlot', requestOptions)
        .then(
          (response) => {
            console.log(response.status)
            if(response.ok)
            setMsg("Appointment Updated")
            else{
              setMsg("Slot is not updated")
            }
          }).catch(errr=>{
            
          }) 
    }
 

    
    return(
        <>

<div className="container-sm  p-4  w-75  m-auto shadow  mb-5 mt-5 rounded">
  <h3 className="mb-4 text-center">Update Slots for  Appointment</h3>
 
  <div className="container-sm    w-75 ">
  
  <form className="formm bg-white m-auto shadow pt-4 border border-warning border-3 mb-5 mt-5 rounded"onSubmit={createNewslotes}>
  <h1 className="text-center text-danger">{Msg}</h1>
     <div className="row w-100 gx-5 m-3 ">
     <div className="form-group   col-lg-4 ">
    <label className="form-label"for="StartTime">Start Time</label>
    <select  className=" border-2 form-control " name="StartTime" id="StartTime" onClick={e=>setStartTime(e.target.value)}>
      <option value="05:00:00">5 am</option>
      <option value="06:00:00">6 am</option>
      <option value="07:00:00">7 am</option>
      <option value="08:00:00">8 am</option>
      <option value="09:00:00">9 am</option>
      <option value="10:00:00">10 am</option>
      <option value="11:00:00">11 am</option>
      <option value="12:00:00">12 pm</option>
      <option value="13:00:00">1 pm</option>
      <option value="14:00:00">2 pm</option>
      <option value="15:00:00">3 pm</option>
      <option value="16:00:00">4 pm</option>
      <option value="17:00:00">5 pm</option>
      <option value="18:00:00">6 pm</option>
      <option value="19:00:00">7 pm</option>
      <option value="20:00:00">8 pm</option>
      <option value="21:00:00">9 pm</option>
      <option value="22:00:00">10 pm</option>
      <option value="23:00:00">11 pm</option>
      <option value="24:00:00">12 am</option>  
    </select> 
    </div>
    <div className="form-group col-lg-4 ">
    <label  className="form-label" for="EndTime">EndTime</label>
    <select className=" border-2 form-control" name="EndTime" id="EndTime" onClick={e=>setEndTime(e.target.value)}>
      <option value="05:00:00">5 am</option>
      <option value="06:00:00">6 am</option>
      <option value="07:00:00">7 am</option>
      <option value="08:00:00">8 am</option>
      <option value="09:00:00">9 am</option>
      <option value="10:00:00">10 am</option>
      <option value="11:00:00">11 am</option>
      <option value="12:00:00">12 pm</option>
      <option value="13:00:00">1 pm</option>
      <option value="14:00:00">2 pm</option>
      <option value="15:00:00">3 pm</option>
      <option value="16:00:00">4 pm</option>
      <option value="17:00:00">5 pm</option>
      <option value="18:00:00">6 pm</option>
      <option value="19:00:00">7 pm</option>
      <option value="20:00:00">8 pm</option>
      <option value="21:00:00">9 pm</option>
      <option value="22:00:00">10 pm</option>
      <option value="23:00:00">11 pm</option>
      <option value="24:00:00">12 am</option>  
      </select> 
      </div>
      <div className="form-group col-lg-4 ">
    <label  className="form-label" for="SlotTime">SlotTime</label>
    <select  className=" border-2 form-control " name="SlotTime" id="SlotTime" onClick={e=>setSlotDuration(e.target.value)}>
    <option value="00:10:00">10 min</option>
    <option value="00:20:00">20 min</option>
    <option value="00:30:00">30 min</option>
    </select> 
    </div>
    </div>
    <div className="row w-100 m-3 gx-5">
    <div className="form-group   col-lg-4">
    <label className="form-label" for="BreakStartTime">Break Start Time  </label>
    <select className="form-control  border-2" name="BreakStartTime" id="BreakStartTime" onClick={e => setBreakStartTime(e.target.value)}>
      
      <option value="11:00:00">11 am</option>
      <option value="12:00:00">12 pm</option>
      <option value="13:00:00">1 pm</option>
      <option value="14:00:00">2 pm</option>
      <option value="15:00:00">3 pm</option>
      <option value="16:00:00">4 pm</option>
    </select> 
  </div>
  <div className="form-group  col-lg-4">
    <label className="form-label" for="BreakEndTime">Break End Time</label>
    <select  className=" border-2 form-control" name="BreakEndTime" id="BreakEndTime" onClick={e => setBreakendTime(e.target.value)} >
      <option value="12:00:00">12 pm</option>
      <option value="13:00:00">1 pm</option>
      <option value="14:00:00">2 pm</option>
      <option value="15:00:00">3 pm</option>
      <option value="16:00:00">4 pm</option>
      <option value="16:00:00">5 pm</option>
    </select> 
    </div>
    </div>
    <div className=" m-2 d-flex justify-content-center ">
    <Calendar  onClickDay={setDateOfAppointment}/>
    </div> 
        <div className="m-3 text-center">
    <input  type="submit" className="buttonn" value="Submit" />
    </div>
    <div className="text-center">
        <button className="btn btn-warning m-3 "><Link to={"/DoctorLoginLayout"}>Back</Link></button>
      </div>
  </form>
  </div>
</div>
        </>
    )
}

export default DoctorUpdateCreatedSlotes;