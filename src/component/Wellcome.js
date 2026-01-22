
import "./Wellcome_page.css"
import { useNavigate } from "react-router-dom"

import { useState,useEffect } from "react"


export default function WellcomeHome() {

    const nav=useNavigate()
    function Enter(){nav("/login")}
    


    // الكلمات الخاص h1 تتكتب وتتمسح
    const words=["Challenge Yourself Today"];

    // النص الظاهر 
    const [text,settext]=useState("")
    
    // رقم الكلمه
    const [wordindex,setWordIndex]=useState(0)

    // رقم الحرف
    const[charindex,setCharIndex]=useState(0)
    
    // نكتب ولا نمسح
    const[delet,setdelet]=useState(false)


    useEffect(()=>{
        const currentWord=words[wordindex]

        let speed=delet ? 80:120

        const typing=setTimeout(()=>{
            // في حاله الكتابه
            if(!delet){
              settext(currentWord.substring(0,charindex+1));
              setCharIndex(charindex+1);

                  //    خلص كتابه ابداء مسح بعد 0.8 ثانيه 
                    if (charindex+1===currentWord.length)
                        {
                        setTimeout(() =>{
                          setdelet(true);
                        } , 800)}}

                                // حاله 2 المسح 
            else{settext(currentWord.substring(0,charindex-1));
                setCharIndex(charindex-1)
                                
                    //  اول مل يخلص مسح
                                if(charindex-1===0){
                                setdelet(false);
                                setWordIndex(prev=>(prev+1)% words.length);
                                        }
                                    }
                                },speed);

                return()=>
                    clearTimeout(typing);},[charindex,delet,wordindex]);

    return(
    <div className="Wellcome_page">
        <h1>{text}</h1>
        <p>Click " Start " to login or explore as a visitor   </p>
        <button  onClick={Enter}> start</button>
    </div>)}