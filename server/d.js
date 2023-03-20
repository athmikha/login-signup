app.get("/api", (req,res)=>{
    db.query("SELECT * FROM addproducts", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
    
    // Route to get one post
    app.get("/app", (req,res)=>{
    
    //const id = req.params.id;
     db.query("SELECT * FROM addproducts WHERE id = ?", id, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });
    
    // Route for creating the post
    app.post('/api/create', (req,res)=> {
    
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    
    db.query("INSERT INTO addproducts(title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   })
    // Route to get all posts


// Route to like a post
//app.post('/api/like/:id',(req,res)=>{

/*const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});*/

// Route to delete a post

//app.delete('/api/delete/:id',(req,res)=>{
//const id = req.params.id;

//db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
//if(err) {
//console.log(err)
       // } }) })

//app.listen(PORT, ()=>{
 //   console.log(`Server is running on ＄{PORT}`)
//})
//const saltRounds = 10;
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12Athmikha@",
  database: "inbudget"
});

module.exports=db;
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   
});



con.connect();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({ //cross origin resource sharing
    origin: '*'
}));
app.use(express.json());

app.get("/data", function(req, res){
    res.json({message: "<h1>server running</h1>"})
})
logged='false'
username='nil'
mail='nil'
first_name='nil'
app.get("/getDet", function(req, res){
    res.json({message: logged, username: username, mail: mail, first_name: first_name})
})
app.post("/App", function(req, res){
    var username=req.body.user
    var password= req.body.pass
    console.log(username , password)
    var sql= "SELECT * FROM users where username= (?)";
    var values=[req.body.user];
 
})
    

app.post("/App", function(req, res){
    
        var sql="INSERT INTO addproducts VALUES (?)";
        var values=[req.body.productno, req.body.productnamr , req.body.stock , req.body.cost , req.body.mrp];
        console.log(values)
        con.query(sql, [values]);
    });    
    res.send("successful")

app.listen(8000, function(){
    console.log("server started on port 8000");
})*/
const billNum = document.getElementById('productName').value
//const user1=document.getElementsById('productName').value
const pass1=document.getElementsByClassName('generatehead4')[0].value
const pass2=document.getElementsByClassName('generatehead5')[0].value
const pass3=document.getElementsByClassName('generatehead6')[0].value


const val={generatehead3:billNum, generatehead4:pass1, generatehead5:pass2, generatehead6:pass3};
