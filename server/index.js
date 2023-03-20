import express from "express"
import cors from "cors"
import  bcrypt from "bcrypt"
import bodyParser from "body-parser"
const saltRounds = 10;



//const db = require('./config/db')
//const bcrypt = require("bcrypt")
//onst bodyParser=require("body-parser");
const app=express()
app.use(cors());

import mysql from "mysql"

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12Athmikha@",
    database: "signup"
})

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})


//const  PORT = 3002;

app.use(express.json())
/*app.get("/data", function(req, res){
    res.json({message: "<h1>server running</h1>"})
})*/




////////////////////////////////////////////////////////////////////////

  
  app.post("/signup", function(req, res){

    var sql="insert into userDetail (userName,contact,email,password) values (?)";
    console.log('signup')
    console.log(sql)
    var values =[req.body.userName,req.body.Contact,req.body.email,req.body.password]
    console.log(values);
    var a=req.body.confirmpassword;

    if(a!=req.body.password ){
      console.log("if")
      console.log("password does not match")
      res.send("false")
    }
  
    else{
      console.log("else")
      db.query(sql, [values]);
      console.log('inserted')
      res.send("true")
    }
  
      
    
    })  ;

app.get("/getDet", function(req, res){
    console.log('getdet')
    console.log(logged)
    res.json({message: logged})
});
app.post("/login", function(req, res){
  var username=req.body.user
  var password= req.body.pass
  console.log(username , password)
  var sql= "SELECT * FROM userDetail where username= (?)";
  var values=[req.body.user];
  console.log('values')
  console.log(values)
  db.query(sql, [values], function(err, results, feilds){
      if (results.length !=0){
          console.log(results)
          console.log(results[0].password)
          var f=results[0].password
          console.log('results[0].password')
         console.log(password)
         console.log("password")
          //bcrypt.compare(password, results[0].password, function(err, result) {
              if (f == password){
                //req.session.user=results
              res.json({message: 'true'})
              console.log('true')
                
                //console.log(req.session.user)
              //loggedCustId=results[0].userId
              //loggedCustName=results[0].first_name
              //loggedCustMail=results[0].email
              //loggedCustNum=results[0].contact
              //loggedCust='true'

          }
          else{
              //res.json({message: 'false'})
              res.json({message: 'nouser'})
          }
      }
    }
  )
}
)
    
  

  app.listen(8000, ()=>{
    console.log("connected to backend")
})

   