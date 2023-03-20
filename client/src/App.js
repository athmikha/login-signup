import React from "react";

import Signup from "./pages/signup";

import Inputs from "./pages/inputs";
import Login from "./pages/login";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App()
{


    return(
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
         
          <Route path="/signup" element={<Signup/>}/>
       
          
          <Route path="/inputs" element={<Inputs />}/>
          

        </Routes>
        </BrowserRouter>
      </div>
 
    );
    
   
}


export default App