import React from "react";
import { Link } from "react-router-dom";


function Inputs(){

    return (
        <div className="signupmain">
        <div className="sucontainer">
        
        <div className="sucontainer2">
            <h2>Profit</h2>
       
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="userName" placeholder="Age"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="userName" placeholder="Gender"></input></div>
                <div className="col-lg-6 col-md-6 col-sm-12"><input type="text" name="userName" className="fname" id="userName" placeholder="Dob"></input></div>
                
                
            </div>
        
        
        </div>
        </div>
    </div>
    )
}

export default Inputs;