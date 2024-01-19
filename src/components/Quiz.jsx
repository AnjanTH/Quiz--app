import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../assets/data.js";

export const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result,setResult]=useState(false);
  let Option1=useRef(null);
  let Option2=useRef(null);
  let Option3=useRef(null);
  let Option4=useRef(null);
  let option_array=[Option1,Option2,Option3,Option4];
  const checkans = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
  };
  
 
  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      }
      )
    }
  };
  const previ=()=>{
    setIndex(--index);
    setQuestion(data[index]);
    
    
  
  }
  const submit=()=>{
    setResult(true);
  }

  return (
    <>
      <div className="container">
        <div className="item">
          <h1>Quiz App</h1>
          <hr />
          {result?<>
          <div className="res1">
            <div className="res">
          <h2>you scored {score} out of {data.length}</h2>
          {score==data.length?<>😍<h3>Congratulations </h3></>:<>☹️ <h3>BETTER LUCK NEXT TIME!!!!!</h3></>}
         
          </div>
          </div>
        
          
          </>:<>
          <h2>
            {index + 1}.{question.question}
          </h2>

          <ol>
            <li ref={Option1} onClick={(e) => {checkans(e, 1); }}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => {checkans(e, 2); }}> {question.option2} </li>
            <li ref={Option3} onClick={(e) => {checkans(e, 3);}}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => {checkans(e, 4);}}>{question.option4}</li>
          </ol>
          <div className="but">
            {index == 0 ? <button onClick={next}>Next</button> : null}
            {index == data.length - 1 ? <><button onClick={previ}>Previous</button> <button onClick={submit}>Submit</button>
            </> : null}
            {index < data.length - 1 && index > 0 ? (
              <button onClick={previ}>Previous</button>
            ) : null}
            {index > 0 && index < data.length - 1 ? (
              <button onClick={next}>Next</button>
            ) : null}
          </div>
          <p>
            {index + 1} of question {data.length}
          </p></>}
         
        </div>
      </div>
    </>
  );
};
