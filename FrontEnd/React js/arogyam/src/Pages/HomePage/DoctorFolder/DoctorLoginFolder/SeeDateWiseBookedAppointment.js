import { useState } from "react";
import Calendar from "react-calendar";

function SeeDateWiseBookAppointment(){
    const [date3, setDate] = useState();
    const[bookedslot,setbookedslot]=useState([])
    const getAllBookedSlotesOnThatDay =(event)=>{
        event.preventDefault()
        try{
            console.log(JSON.stringify(date3).substring(1,11));
         const url ='http://localhost:8080/timetable/getAllBookedSlots/d/did?d='+JSON.stringify(date3).substring(1,11)+"&did="+localStorage.getItem("Did")
            fetch(url)
                .then(response => response.json())
                .then( data=>{
                   console.table(data)
                   setbookedslot(data)
                }).catch(err=>{
                })
        }catch(e){
            console.log(e);
        }
       
    }
    return<>
    <form>
       
        <Calendar  onChange={setDate} />
        <button onClick={getAllBookedSlotesOnThatDay} >submit</button>
    </form>

    <table>
                 <thead>
                 <tr>
                <th>Date</th>
                <th>Did</th>
                <th>Pid</th>
                <th>End</th>
                <th>start</th>
             
                 </tr>
             </thead>
    {bookedslot.map((innerAttr,key)=>{
        return(
          <>
        
             <tbody>
                 <tr>
                     <td> {innerAttr.bookId.date}</td>
                     <td>{innerAttr.bookId.did}</td>
                     <td>{innerAttr.bookId.pid}</td>
                     <td>{innerAttr.end}</td>
                     <td>{innerAttr.start}</td>
                     {/* <td>{innerAttr.dockey.dateOfAppointment}</td> */}
                 </tr>
             </tbody>
             
         </>    
          
        )
    })}
    </table>
    </>
}
export default SeeDateWiseBookAppointment;