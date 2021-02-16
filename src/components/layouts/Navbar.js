import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mr-auto">
        <div className="container">
  <NavLink className="navbar-brand" exact to="/home">Users List</NavLink>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/users">User Detail</NavLink>
      </li>
      
      
    </ul>
    
  </div>
  <Link className="btn btn-outline-light" exact to="/users/add">Add User</Link>
  </div>
  <p>Monal kumar</p>
</nav>
  
); 
}
export default Navbar;