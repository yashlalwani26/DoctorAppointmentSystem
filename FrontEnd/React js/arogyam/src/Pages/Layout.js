import { Outlet, Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "./HomePage/layout.css"
const Layout = () => {
    return (
      <>

<nav className="navbar">
      <div className="brand-title ms-4 "><Link className="text-decoration-none text-light" to={"/Home"}>AROGYAM</Link> </div>
      
      <div className="navbar-links me-3">
        <ul>
        
        <li><Link to={"/Home"}>Home </Link></li>
        
        <li><Link to={"/aboutus"}>About</Link></li>
        <li><Link to={"/Contact"}>Contact Us</Link></li>
        <li><Link to={'/'}>{<MdAccountCircle size={30}/>}</Link></li>
        
    
        
        </ul>
      </div>
    </nav>


      {/*
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutas">Abot us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
      </nav>*/}
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;