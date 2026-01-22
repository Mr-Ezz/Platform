
// fiveth question 
import "./Question.css"
import { ArrowBigLeft,BookOpen,ArrowBigRight } from "lucide-react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Question_5(){

    // move beetween chooce
    const move_to_nextquestion=useNavigate()


    //   select chosee
    const[selected,setselected]=useState("");
// return choce from localstroge
    useEffect(()=>{ const answer_saved=localStorage.getItem("q5Answer")
            if(answer_saved){setselected(Number(answer_saved))}
               },[selected])

    // save choce on local storage
    function choice(number){
        setselected(number);
        localStorage.setItem("q5Answer",number)

    }
  



    const [question_number,setquestion_number]=useState(5)
    
    function next_question(){
        if (selected){move_to_nextquestion("/student/question-6")}
        else{alert("pleaze choose an answer")};
        
        setquestion_number(prev=>prev+1);
        
    }

    function last_question(){
                if (question_number==5){move_to_nextquestion("/student/question-4")

    }}
   


    

    return(
        <div className="Question">

            <section className="bttn_top">
                <div className="BookOpen">
                    <BookOpen className="book" />
                    <p>Question {question_number} of 10</p>
                </div>
                <button>{question_number}/10</button>

                
            </section> 
            
            
            <article >
                <h3 className="the_qustion">5- What does CSS stand for?</h3>
                <ul>
                    <li onClick={()=>choice(1)} className={selected===1?"active":""}>Cascading Style Sheets</li>
                    <li onClick={()=>choice(2)} className={selected===2?"active":""}> Computer Style Sheets</li>
                    <li onClick={()=>choice(3)} className={selected===3?"active":""}> Creative Style Sheets </li>
                    <li onClick={()=>choice(4)} className={selected===4?"active":""}>Colorful Style Sheets</li>

                </ul>
            
            </article>
            
            <div className="move">
                        <section className="next_quest" onClick={next_question}>

                            <ArrowBigLeft className="ArrowBigLeft" />
                        </section>


                        <section className="last_quest" onClick={last_question}>

                            <ArrowBigRight className="ArrowBigRight" />
                        </section>
            </div>
            
                
       </div>

    );}