
import { useEffect } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../DoctorFolder/DoctorLoginFolder/doclayout.css"
const PatietAfterLoginLayout = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const Logout=()=>{
      localStorage.removeItem("Pid")
      navigate('/PatientLogin')
  }

  useEffect(() => {

    if(localStorage.getItem("Pid")==null){
        navigate("/PatientLogin")
    }
    },[]);
    return (<>
  
   <h2 className="fw-bold text-center"> Patient Id : {localStorage.getItem("Pid")}</h2>
    <div className=" d-flex justify-content-end">
    
    <Link to={'/PatientLogin'} ><input type={"button"} value="Logout"  className= " border border-danger mt-3 me-5  btn btn-danger" onClick={Logout}/></Link>
    </div>

       <div className="  row1-container">
       
    <div className="box bg-white box-down cyan">
      <h3 className="dlayouth3">Book Appointment</h3>
      <p>Click Here To Create New Appiontment Slots</p>
      <Link  to="/BookAppointmentByPinCode"><button type="button" className="mt-3 btn btn-info">Create</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div className="box bg-white blue">
      <h3 className="dlayouth3">Update Profile</h3>
      <p> Click Here TO Make Changes In Your Profile</p>
      <Link  to="/UpdatePatient"><button type="button" className="mt-3 btn btn-primary">Update</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>
    <div className="box bg-white box-down orange">
      <h3 className="dlayouth3">Update Appiontment</h3>
      <p>Click Here to Update Appiontment</p>
      <Link  to="/UpdateSlotes"><button type="button" className="mt-3 btn btn-warning">View</button></Link>
      
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
    
  </div>
  <div className="row2-container">
  <div className="box bg-white red">
      <h3 className="dlayouth3">Delete Appointment</h3>
      <p>Click Here to Change  Created Appiontment Slots</p>
      <Link  to="/DeleteSlot"><button type="button" className="mt-3 btn btn-danger">Update</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
   
  </div>
  <div className="row2-container">
  <div className="box bg-white red">
      <h3 className="dlayouth3">Review & Rating</h3>
      <p>CLick here to give review</p>
      <Link  to="/Review"><button type="button" className="mt-3 btn btn-danger">Review</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
   
  </div>
   
        <Outlet />
      {/*
     <h1>id = {location.state.pid}</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/UpdatePatient"} state={{pid:location.state.pid}}>UpdatePatient</Link>
            </li>
            <li>
                <Link to={"/BookAppointmentByPinCode"} state={{pid:location.state.pid}} >BookAppointmentByPinCode </Link>
              </li>    
            <li>
                <Link to={"/DeleteSlot"} state={{pid:location.state.pid}}>DeleteSlot</Link>
              </li>    
              <li>
                <Link to={"/UpdateSlotes"} state={{pid:location.state.pid}}>UpdateSlotes</Link>
              </li> 
          </ul>
        </nav>
          */}
        <Outlet />
      </>
    )
  };
  export default PatietAfterLoginLayout;