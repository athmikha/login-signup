import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//axios.defaults.withCredentials = true


function Signup(){

    function handleClick(){
        const user1=document.getElementById('userName').value
        console.log(user1)
        const pass1=document.getElementById('Contact').value
        console.log(pass1)
        const pass2=document.getElementById('email').value
        console.log(pass2)

        const pass4=document.getElementById('password').value
        
        console.log(pass4)
        const pass5=document.getElementById('confirmpassword').value
        console.log(pass5)


            axios.post('http://localhost:8000/signup',
            {
                userName:user1, Contact:pass1, email:pass2, password:pass4, confirmpassword:pass5
            }
            )   .then(function(response){
                var data = response.data
                console.log(typeof data)
                if(data){
                    alert('inserted')
                    window.location.replace('/inputs')
                }
                else{
                    alert("password does not match")
                    window.location.replace('/signup')
                   handleClick()
                }
            })
        }

        //useEffect(()=>{
         //   axios.get('http://localhost:8000/business/getDet')
        //        .then(function(response){
          //          var data = response.data
           //         if(data.message=='true'){
            //            location.replace('/dashboard')
            //        }
             //   })
      //  }, []);
        
    function handleClick1(){
        //const billNum = document.getElementByName('generatehead3')[0].value
        const user1=document.getElementById('userName').value
        console.log(user1)
        const pass1=document.getElementById('Contact').value
        console.log(pass1)
        const pass2=document.getElementById('email').value
        console.log(pass2)

        const pass4=document.getElementById('password').value
        
        console.log(pass4)
        const pass5=document.getElementById('confirmpassword').value
        
      
        
        

        const val={userName:user1, Contact:pass1, email:pass2, password:pass4, confirmpassword:pass5};
        console.log(val)
                    console.log(user1)
                    
                      fetch('http://localhost:8000/signup', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(val),
                                    
                                  
                                })
                                  
                                
       }
    return (
        <div className="signupmain">
        <div className="sucontainer">
        
        <div className="sucontainer2">
            <h2>User  Registration</h2>
        <form action="http://localhost:8000/signup" method="POST">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="userName" placeholder="userName"></input></div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">  <input type="text" name="contact" className="phnum" id="Contact" placeholder="Contact"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="email" name="mail" className="mail" id="email" placeholder="email"></input></div>
               
                
                <div className="col-lg-6 col-md-6 col-sm-12">   <input type="password" name="password" className="pass" id="password" placeholder="password"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12">  <input type="password" name="cpassword" className="pass" id="confirmpassword" placeholder="confirm password"></input></div>
                  <button type="submit" className="btn btn-primary" name="submit" onClick={handleClick}>Register</button>          
                  
            </div>
        </form>
        
        </div>
        </div>
    </div>
    )
}

export default Signup;