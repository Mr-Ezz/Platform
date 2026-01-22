
import { UserCircle, GraduationCap, BookOpen} from 'lucide-react';//الايموجي المستخدمه

import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';




export default function LogIn(){


    const[username,setusername]=useState("")
    const[role,setrole]=useState("undefind")
    const navigate=useNavigate()


    function LogInChek()
    {
        if(username.trim()==="")
        // check usser name
            {alert("username can't be empty ") 
                return; }
    //    check role
        if (role==="undefind"){alert("pleaze select a role")
                 return;}
                
        // local storage 
        localStorage.setItem("username",username)

        
    // if all weel

       if (role==="Student"){navigate("/student/question-1")}

       else if (role==="Teacher"){navigate("/teacher")}

        // alert("login success!")
        
    }
   
   
     return (

    <div className="login">


        <h1>Exam Platform</h1>
        <p>Welcome! Please login to continue</p>
        <br/><br/>
    

        <label className="user" htmlFor='input'>Username  </label><br/>
        
        
        <div className='InputFiled'>
                <UserCircle className='icon'/>

                <input id="input" 
                 placeholder="Enter your username" 
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}

                />
        </div>





        <p>Select Role</p>
        <div className='role'>

            <div className='Student'  onClick={()=>{setrole("Student")}} >
                 <GraduationCap  />
                 <p> student</p>
            </div>

            <div className='Teacher'   onClick={()=>{setrole("Teacher")}}>
                 <BookOpen />
                 <p>Teacher</p>

            </div>
            
         </div>
         
            <div className='button'>
                <button onClick={LogInChek} > Login</button>
            </div>





    </div>)

}


