import  { useEffect, useState } from 'react'


export default function Test({
    data,
    setStop,
    questionNumber, 
    setQuestionNo 
}) {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAns] = useState(null)
    const [className, setClassName] = useState(null)

    useEffect(()=>{
setQuestion(data[questionNumber-1])
    }, [data, questionNumber])

    const delay = (duration, callback) =>{
        setTimeout(()=>{
            callback()
        }, duration)

    }

    const handleClick = (a) => {
        setSelectedAns(a)
        setClassName("answer active");
        delay(3000, ()=>
    setClassName(a.correct ? "answer correct" : "answer wrong")
);
delay(5000, ()=>
    {
        if(a.correct){
            setQuestionNo((prev) => prev + 1);
            setSelectedAns(null)
        } else{
            setStop(true)
        }
    }
);
    };

    

  return(
    
    <div className='test '>
        
        <div className="question"> {question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) =>(
             <div className="answer">{selectedAnswer === a ? className : "answer"}
              onClick={()=>handleClick(a)}
                {a.text}
                </div>

        ))}
        
      </div>
    </div>
  )
}

