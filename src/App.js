// main file
import './App.css';
import{BrowserRouter as Router,Routes,Route}from "react-router-dom"
import WellcomeHome from"./component/Wellcome.js"
import LogIn   from"./component/login"
import TeacherHome from "./component/TeacherHome.jsx"
import Question_1 from './component/Questions/Question_1.js';
import Question_2 from  "./component/Questions/Question_2.js"
import Question_3 from './component/Questions/Question_3.js';
import Question_4 from './component/Questions/Question_4.js';
import Question_5 from './component/Questions/Question_5.js';
import Question_6 from './component/Questions/Question_6.js';
import Question_7 from './component/Questions/Question_7.js';
import Question_8 from './component/Questions/Question_8.js';
import Question_9 from './component/Questions/Question_9.js';
import Question_10 from './component/Questions/Question_10.js';
import Question_End from './component/Questions/Question_End.js';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<WellcomeHome/> }/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/teacher" element={<TeacherHome/>}/>
        
        <Route path="/student/question-1" element={<Question_1/>} />
        <Route path="/student/question-2" element={<Question_2/>} />
        <Route path="/student/question-3" element={<Question_3/>} />
        <Route path="/student/question-4" element={<Question_4/>} />
        <Route path="/student/question-5" element={<Question_5/>} />
        <Route path="/student/question-6" element={<Question_6/>} />
        <Route path="/student/question-7" element={<Question_7/>} />
        <Route path="/student/question-8" element={<Question_8/>} />
        <Route path="/student/question-9" element={<Question_9/>} />
        <Route path="/student/question-10" element={<Question_10/>} />
        <Route path="/student/question-End" element={<Question_End/>} />
        

      </Routes>
    </Router>        
  );
}

export default App;
