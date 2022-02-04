import React, { useState } from "react";
import swal from "sweetalert";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Body.css';

import Swal from "sweetalert";

function Body(){

    const[name, setname]=useState('');

    const[username ,setusername]=useState('');

    const[password , setpassword]=useState('');


    function registerUser(event){

        event.preventDefault();

        var users=JSON.parse(localStorage.getItem('users') || [''])

        var newuser={
            name:name,
            username:username,
            password:password,
        }

        users.push(newuser);

        localStorage.setItem('users',JSON.stringify(users));

        Swal('registration successful','success');



        
    }

    return <div>
        <div className="row justify-content-center">
            <div className='col-md-6'>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZhY2Jvb2slMjBsb2dpbiUyMHBhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

            </div>

            <div className='col-md-6'>
                <form onSubmit={registerUser}>

                    <h2>Registration Form</h2>

                    <label>Name</label>
                    <input type="text" placeholder='name' className="form-control" value={name}
                    onChange={(e)=>{setname(e.target.value)}}/>

                    <label>Username</label>
                    <input type="text" placeholder="username" className="form-control" value={username}
                    onChange={(e)=>{setusername(e.target.value)}} />

                    <br />
                    <label>password</label>
                    <input type="password" placeholder='password' className="form-control" value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}} />
                    <br />
        

                    <input type="submit" className='btn btn-primary' value='Sign up' />

                
                </form>
                

            </div>

        </div>

        
    </div>
}

export default Body