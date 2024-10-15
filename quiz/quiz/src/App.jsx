import React, { useEffect, useMemo, useState } from "react";
import "./app.css";
import Test from "./Components/Test";
import Timer from "./Components/Timer";
import Home from "./Components/Home";




function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 points");

  const data =[
    {
      id: 1,
      question: "What is Software Engineering? ",
      answers: [
        {
          text: "Designing a software",
         correct: false,
        },
        {
          text: "Testing a software",
          correct: false,
        },
        {
          text: "Application of engineering principles to the design a software",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the father of Software Engineering? ",
      answers: [
        {
          text: "Margaret Hamilton",
          correct: false,
        },
        {
          text: "Watts S. Humphrey",
          correct: true,
        },
        {
          text: "Alan Turing",
          correct: false
        },
        {
          text: "Boris Beizer",
          correct: false,
        }
      ]
    },
    {
     id: 3,
      question: "What are the features of Software Code? ",
      answers: [
        {
          text: "Simplicity",
          correct: false,
        },
        {
         text: "Accessibility",
          correct: false,
        },
        {
          text: "Modularity",
          correct: true,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
     id: 4,
      question: " The Cleanroom philosophy was proposed by _________",
      answers: [
        {
       text: "Linger",
          correct: false,
        },
        {
          text: "Mills",
          correct: false,
        },
        {
          text: "Dyer",
          correct: false,
        },
        {
          text: "All of the Mentioned",
          correct: true,
        },
      ],
    },
    {
      id: 4,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 5,
       question: " 	_______ is the smallest unit of data in a computer ?",
       answers: [
         {
        text: "Gigabyte ",
           correct: false,
         },
         {
           text: "Bit",
           correct: true,
         },
         {
           text: "Byte",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: false,
         },
       ],
     },
     {
      id: 6,
       question: " Which of the following is NOT an anti-virus software ?",
       answers: [
         {
        text: "avast",
           correct: false,
         },
         {
           text: "linux",
           correct: true,
         },
         {
           text: "norton",
           correct: false,
         },
         {
           text: "kaspersky",
           correct: false,
         },
       ],
     },
     {
      id: 7,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 8,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 9,
       question: " In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
       answers: [
         {
        text: "3 and 4 ",
           correct: false,
         },
         {
           text: "0 and 1 ",
           correct: true,
         },
         {
           text: "2 and 3 ",
           correct: false,
         },
         {
           text: "2 and 3 ",
           correct: false,
         },
       ],
     },
     {
      id: 10,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 11,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 12,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 13,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
     {
      id: 14,
       question: " The Cleanroom philosophy was proposed by _________",
       answers: [
         {
        text: "Linger",
           correct: false,
         },
         {
           text: "Mills",
           correct: false,
         },
         {
           text: "Dyer",
           correct: false,
         },
         {
           text: "All of the Mentioned",
           correct: true,
         },
       ],
     },
  ];
  

  const pointList = useMemo(
    () =>
      [
       
        { id:1, point: "10" },
        { id: 2, point: "15" },
        { id: 3, point: "20" },
        { id: 4, point: "25" },
        { id: 5, point: "30" },
        { id:6, point: "35" },
        { id: 7, point: "40" },
        { id: 8, point: "45" },
        { id: 9, point: "50" },
        { id: 10, point: "55" },
        { id: 11, point: "60" },
        { id: 12, point: "65" },
        { id:13, point: "70" },
        { id: 14, point: "75" },
        { id: 15, point: "80" },
        { id: 16, point: "85" },
        { id: 17, point: "90" },
        { id:18, point: "100" },
        { id: 19, point: "Well Done! You Did It." },
      ].reverse(),

    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(pointList.find((m) => m.id === questionNumber - 1).point);
  }, [pointList, questionNumber]);

 
 


    

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText"> You got: {earned}</h1>
            ) : (
              <>
             
                <div className="top">
               
                  <div className="timer">
                    {" "}
                    
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                {
                <div className="bottom" >
              
                      
                      <Test 
                      data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNo={setQuestionNo} />
                   
                  
          
                        </div>
                        }
                   </>
              )}
          
          </div>
       
          <div className="list">
            <ul className="pointList">
              {pointList.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "pointListItem active"
                      : "pointListItem"
                  }
                >
                  <span className="pointListNumber">{m.id}</span>
                  <span className="pointListPoint">{m.point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Home setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
