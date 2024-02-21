import { Link, Outlet } from "react-router-dom";

const PatietLayout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/PatientLogin">Patient Login</Link>
            </li>
            <li>
              <Link to="/PatientSingUP">PatientSingUP</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  export default PatietLayout;