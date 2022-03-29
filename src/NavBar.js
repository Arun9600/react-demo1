import logo from "./logo.svg";
import {Outlet, Link} from "react-router-dom";
const NavBar = () =>{

    return(
        <>
        <nav className="main-menu">
            <div className="logoClass">
              <img src={logo} style={{width:"100px"}} alt="logo"/>
            </div>
           <div className="menus">
               <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/counter">Counter</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
               </ul>
           </div>
        </nav>
        <Outlet/>
        </>
    );
}

export default NavBar;
