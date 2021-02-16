 import React,{useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";
import axios from "axios"
 const EditUsers=()=>{
     let history=useHistory();
     const {id} =useParams();
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
    }; 
    const onSubmit= async e =>{
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/home")
    }
useEffect(()=>{
    loadUsers();
},[])
    const loadUsers= async ()=>{
        const result= await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    };

     return(
<div className="container ">
<div className="w-auto shadow bg-blue p-5 ">
<h2 className="text-center mb-5">Edit Users</h2>
<form onSubmit={(e)=>onSubmit(e)}>
<div className="form-group">
<input type="text" placeholder="Enter Name" name="name"  value={name} className="form-control form-control-lg" onChange={e => onInputChange(e)}/>
</div>
<div className="form-group">
<input type="text" placeholder="Enter user Name" name="username" value={username}className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter email address" name="email"  value={email} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter phone number" name="phone"value={phone} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>
<div className="form-group">
<input type="text" placeholder="Enter website" name="website" value={website} className="form-control form-control-lg" onChange={e => onInputChange(e)} />
</div>

<button className="btn btn-success btn-block">Update Users</button>
</form>

</div>

</div>



     )
 }

 export default EditUsers;

















