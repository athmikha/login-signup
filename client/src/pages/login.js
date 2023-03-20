import React from "react";
import {Link, Outlet} from "react-router-dom";
import axios from 'axios';
//axios.defaults.withCredentials = true
function Login()
{    
    
function redirect(){
    const user1=document.getElementsByClassName('user1')[0].value
    const pass1=document.getElementsByClassName('pw1')[0].value
    
    console.log(user1, pass1)
    const val={user:user1, pass:pass1};
        axios.post('http://localhost:8000/login', val)
        .then(function(response){
            window.location.replace('/inputs')
        })

    }
    return(
        <div className="signupmain">
        <div class="sucontainer">
       <div class="sucontainer2">
            <h1>Customer Login</h1>
            <p>Please fill in your basic info</p>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <input type="text" className="user1" id="user1" placeholder="Username"></input>
                <input type="password" className="pw1" id="pw1" placeholder="Password"></input>
           
            <button type="submit" className="btn btn-primary" name="submit" onClick={redirect}>LOGIN</button>          
            </div>
            
            <a href="/SignUp" >Create Account?</a>
            
            
        
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login;