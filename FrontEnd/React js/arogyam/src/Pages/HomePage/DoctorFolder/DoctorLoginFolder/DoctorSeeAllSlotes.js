import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar'

 const DoctorSeeAllTheSlotes=()=>{
    const [Msg, setMsg] = useState();
    const [date3, setDate] = useState();
    const [users, setUsers] = useState([])
    const navigate=useNavigate()

    useEffect(() => {

        if(localStorage.getItem("Did")==null){
          navigate("/DoctorLogin")
        }
        },[]);

    const getAllSlotes =(event)=>{
        event.preventDefault()
        try{
            console.log(JSON.stringify(date3).substring(1,11));
       
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "id": localStorage.getItem("Did"),
                    "dateOfAppointment":  JSON.stringify(date3).substring(1,11)
                } )
            };
            fetch('http://localhost:8080/timetable/getslot', requestOptions)
                .then(response => response.json())
                .then( (data)=>{
                   
                    setUsers(data)
                    setMsg("")
                }).catch(err=>{
                    setUsers("")
                    setMsg(" Slote is not created for date  : " + JSON.stringify(date3).substring(1,11));
                })
        }catch(e){
            console.log(e);
        }
       
    }
    
return(
    <>
    <div className="container-sm  w-50   m-auto">
        <h4 className="text-center m-3 text-danger fw-bold">{Msg}</h4>
    <form className="formm bg-white m-auto mb-2 mt-4  border border-warning border-3 rounded p-5 pb-2 pt-4"  onSubmit={getAllSlotes}>
    <div className="form-group ">
    <h2 className='text-center fw-bold  mb-2'>View Slots of Appointment</h2>
    </div>
    <h5 className="m-2">Select Date</h5>
    <div className=" mb-2 d-flex justify-content-center">
        
    <Calendar  onChange={setDate} />
     </div >
     <div className="text-center">
    <input type="submit" className="buttonn" value="Submit" />
    </div>
    <div className="text-center">
        <button className="btn btn-warning m-3 "><Link to={"/DoctorLoginLayout"}>Back</Link></button>
      </div>
  </form>
  </div>

  <div className='container w-50 table-responsive m-auto'>
            <h3 className='m-2 text-center'> Appointment Slots</h3>
    
            <table class="table  table-bordered border border-dark table-hover text-center  ">
             
                 <thead className="table-dark">
                 <tr>
                     <th>Sr no.</th>
                     <th>Start Time</th>
                     <th>End Time</th>
                 </tr>
             </thead>
    {Object.keys(users).map((innerAttr, index) => {
        
        return (
             <tbody>
                 <tr>
                     <th>{index +1}</th>
                     <td> {innerAttr} </td>
                     <td>{users[innerAttr]}</td>
                 </tr>
             </tbody>
        )})
    }
    
     </table>
             </div>
    </>
)
}
export default DoctorSeeAllTheSlotes;