
// third question 

import "./Question.css"
import { ArrowBigLeft,BookOpen,ArrowBigRight } from "lucide-react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Question_3(){

    // move beetween chooce
    const move_to_nextquestion=useNavigate()


    //   select chosee
    const[selected,setselected]=useState("");
// return choce from localstroge
    useEffect(()=>{ const answer_saved=localStorage.getItem("q3Answer")
            if(answer_saved){setselected(Number(answer_saved))}
               },[selected])

    // save choce on local storage
    function choice(number){
        setselected(number);
        localStorage.setItem("q3Answer",number)

    }
  



    const [question_number,setquestion_number]=useState(3)
    
    function next_question(){
        if (selected){move_to_nextquestion("/student/question-4")}
        else{alert("pleaze choose an answer")};
        
        setquestion_number(prev=>prev+1);
        
    }

    function last_question(){
                if (question_number==3){move_to_nextquestion("/student/question-2")

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
                <h3 className="the_qustion">3- What is the correct way to declare a variable in JavaScript?</h3>
                <ul>
                    <li onClick={()=>choice(1)} className={selected===1?"active":""}>let myVar = 5;</li>
                    <li onClick={()=>choice(2)} className={selected===2?"active":""}>text-color</li>
                    <li onClick={()=>choice(3)} className={selected===3?"active":""}>v myVar = 5;</li>
                    <li onClick={()=>choice(4)} className={selected===4?"active":""}>declare myVar = 5;</li>

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