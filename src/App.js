import './App.css';
import Navbar from "./components/layouts/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUsers from "./components/users/AddUsers";
import EditUsers from "./components/users/EditUsers";
import User from "./components/users/User"
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
const App=()=>{
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/home" component={Home}/> 
    <Route exact path="/users/add" component={AddUsers}/> 
    <Route exact path="/users/edit/:id" component={EditUsers}/> 
    <Route exact path="/users/user/:id" component={User}/> 
    
    
    </Switch>
    
    
    </div>
    </Router>

  );
}

export default App;
