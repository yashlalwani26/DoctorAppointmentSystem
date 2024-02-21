import { Link } from "react-router-dom";
import "../HomePage/Homepagelayout.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const HomepageLayout = () => {
    return (
      <>

      <div className="homediv p-5 text-center w-50   ">

      
      <div className="mt-4">
      
            <Link  className="m-3" to={"/PatientLogin"} ><button  type="button" className="btn btn-warning" > <h3>Patient</h3></button></Link>
            
            <Link className="m-3" to={"/DoctorLogin"} ><button  type="button" className="btn btn-info"> <h3>Doctor</h3></button></Link>
          
            <Link className="m-3" to={"/AdminPage"} ><button  type="button" className="btn btn-warning"><h3> Admin</h3></button></Link>

            </div></div>
        <div class="  footer  m-auto">
          
    
    <p> AROGYAM </p>
  </div>
      </>
    )
  };
  
  export default HomepageLayout;