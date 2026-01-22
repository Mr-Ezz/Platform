// TeacherHome.js
import"./TeacherHome.css"
import { useNavigate } from "react-router-dom"
import {LogOutIcon, BookOpen,SheetIcon ,ViewIcon,SearchIcon,HomeIcon} from "lucide-react"
import { useEffect } from "react"
import {toast ,Toaster} from "react-hot-toast"




export default function TeacherHome(){

    
    const user=localStorage.getItem("username")
    const navigate=useNavigate()



    useEffect(()=>{
        if (!user){
            alert("should be logged in first")
            navigate("/")}},[user,navigate])



    function log_out(){
        const conf=window.confirm("Are you sure you want to logout?")
        if (conf){
            localStorage.removeItem("username")
            navigate("/")
        }
    }
   
    function say(){toast(" 🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" )

    }

    function return_to_home() {
        navigate("/")
        
    }


return(
<div className="TeacherHome" >

    <div >
     <HomeIcon className="icon-home" onClick={return_to_home}  />
    </div>

    <header className="Dashbord">

        <div className="left">
            <BookOpen className="icon_top"></BookOpen>
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, mr : {user} !</p>  
        </div>

        <button type="button" className="logout_but"
         onClick={log_out}>  <LogOutIcon /> logout</button>
        

        
    </header>


    <section className="wellcome">
        <h1>welcome, mr : {user}   ! 👋</h1>
        
        <h4>Manage your exams, view student results, and track progress from your dashboard.</h4>

    </section>
  


    <section className="doing">

        <article className="view" onClick={say}>
            <SearchIcon className="icon_top"/>
            <h3>View Students</h3>
            <p>See all enrolled students and their information</p>

        </article>

        <article className="Manage"  onClick={say}>
                <SheetIcon className="icon_top"/>
                 
                <h3>Manage Exams</h3>
                <p> Create, edit, and organize exam questions</p>
        </article>
        

        <article className="View_Results"  onClick={say}>
            <ViewIcon className="icon_top"/>


            <h3>View Results</h3>
            <p>Check student exam scores and analytics</p>

       <Toaster />
        
        </article>

    </section>


 </div>
 )}