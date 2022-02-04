import React from "react";
import './Navbar.css'
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navbar(){

    return <div>
        <div className="row nav">

            <div className='col-md-6'>
                <h1>facebook</h1>

            </div>

            <div className='col-md-6'>
                <input type="text" placeholder="username" />

                <input type="password" placeholder='password' />

                <button className='btn btn-primary'>Login</button>

            </div>

        </div>
    </div>
}

export default Navbar;