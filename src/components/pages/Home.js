import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
 
const Home=()=>{
  const [users,setUser]=useState([])
  useEffect(()=>{
    loadUsers();
  },[])
const loadUsers=async ()=>{
  const result=await axios.get("http://localhost:3003/users");
setUser(result.data.reverse())
}

const deleteUser=async id =>{
await axios.delete(`http://localhost:3003/users/${id}`)
loadUsers()
}
  return(
    <table class="table">
  <thead class="thead-dark"> 
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserNmae</th>
      <th scope="col">Email</th>
      <th scope="col">Phone </th>
      <th scope="col">Website</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {


      users.map((user,index)=>(
        
        <tr>
        <th scope="row">{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>
        <Link className="btn btn-primary sm mr-2" exact to={`/users/user/${user.id}`}>View</Link>
        <Link className="btn btn-success sm mr-2" exact to={`/users/edit/${user.id}`}>Edit</Link>
        <Link className="btn btn-danger sm mr-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
         
        
        </td>
        
        </tr>

      ))
      }
  </tbody>
</table>
  )
  } 

export default Home;
