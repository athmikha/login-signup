import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//axios.defaults.withCredentials = true


function Update(){

    function handleClick(){
        const user1=document.getElementById('Gender').value
        console.log(user1)
        const pass1=document.getElementById('Age').value
        console.log(pass1)
        const pass2=document.getElementById('Dob').value
        console.log(pass2)

            axios.post('http://localhost:8000/update',
            {
                Gender:user1, Age:pass1, Dob:pass2
            }
            )   .then(function(response){
                var data = response.data
                console.log(typeof data)
                if(data){

                    alert('inserted')
                   
                }
               
            })
        }
              function Logout(){
                window.location.replace('/login')

              }       
                        
       
    return (
        <div className="signupmain">
        <div className="sucontainer">
        
        <div className="sucontainer2">
            <h2>User  Registration</h2>
        <form action="http://localhost:8000/signup" method="POST">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="Gender" placeholder="Gender"></input></div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">  <input type="text" name="contact" className="phnum" id="Age" placeholder="Age"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="text" name="mail" className="mail" id="Dob" placeholder="Dob"></input></div>
               
                
                
                  <button type="submit" className="btn btn-primary" name="submit" onClick={handleClick}>Update</button>    
                  <button type="submit" className="btn btn-primary" name="submit" onClick={Logout}>logout</button>    

                  
            </div>
        </form>
        
        </div>
        </div>
    </div>
    )
    }

export default Update;