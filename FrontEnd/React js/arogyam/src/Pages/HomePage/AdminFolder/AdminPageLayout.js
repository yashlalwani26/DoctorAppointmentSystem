import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function AdminPageLayout(){
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{

        if(localStorage.getItem("Aid")==null){
          navigate("/AdminPage")
        }
      },[])
      const logout=()=>{
          localStorage.removeItem("Aid")
          navigate("/AdminPage")
      }
    return(
        <>
        <div className=" d-flex justify-content-end">
      <input type={"button"} value="Logout"  onClick={logout} className= " border border-danger mt-3 me-5  btn btn-danger" />
      </div>

  
       <div class="row1-container mt-5">
    <div class="box bg-white box-down cyan">
      <h3 className="dlayouth3"> Approve Doctor </h3>
      <p>Click Here To Approve the New Doctor Application</p>
      <Link  to="/AcceptNewDoctor"><button type="button" class="mt-3 btn btn-info">Approve</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box  bg-white blue">
      <h3 className="dlayouth3">Add New Admin</h3>
      <p> Click Here TO Add New Admin to This POrtal</p>
      <Link  to="/CreateAdmin"><button type="button" class="mt-3 btn btn-primary">Add</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

  <div class="box  bg-white box-down red">
      <h3 className="dlayouth3">Remove Doctor</h3>
      <p>Click Here to Permantely Remove Doctor</p>
      <Link  to="/DeleteDoctor"><button type="button" class="mt-3 btn btn-danger">Remove</button></Link>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
    
  </div>
  

        
        {/* <nav>
          <ul>
            <li>
            <Link to={"/DeleteDoctor "} >Remove Doctor</Link>
            </li>
            <li>
            <Link to={"/CreateAdmin"} >Add New Admin</Link>
            </li>        
            <li>
            <Link to={"/AcceptNewDoctor"} >Accept New Doctor Application </Link>
            </li>     
          </ul>
        </nav> */}
       
        </>
    )
}

export default AdminPageLayout