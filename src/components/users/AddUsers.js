import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios"
 const AddUsers=()=>{
     let history=useHistory();
     const[user,setUser]=useState({
         name: "",
         username: "",
         email: "",
         phone: "",
         website: ""
     });
     
     const{name, username, email, phone, website}=user;
     const onInputChange = e => {
       setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async e =>{
        e.preventDefault()
        await axios.post("http://localhost:3003/users",user);
        history.push("/home")
    }

     return( 
<div className="container">
<div className="w-auto shadow p-5">
<h2 className="text-center mb-5">Add Users</h2>
<form onSubmit={(e)=>onSubmit(e)}>
<div className="form-group">
<input type="text" placeholder="Enter Name" name="name"  value={name} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter User Name" name="username" value={username}className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter Email"  name="email"  value={email} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter phone Number" name="phone"value={phone} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter Website" name="website" value={website} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>

<button className="btn btn-primary btn-block">Add User</button>
</form>

</div>

</div>



     )
 }
 export default AddUsers;