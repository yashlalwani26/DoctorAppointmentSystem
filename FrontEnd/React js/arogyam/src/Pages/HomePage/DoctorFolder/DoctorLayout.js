import { Link, Outlet } from "react-router-dom";

const DoctorLayout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/DoctorLogin">Doctor Login</Link>
            </li>
            <li>
              <Link to="/DoctorRegister">Sign Up</Link>
            </li>    
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  export default DoctorLayout;