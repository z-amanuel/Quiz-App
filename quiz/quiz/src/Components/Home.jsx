import { useRef } from "react"


export default function Home({setUsername}) {
    const inputRef = useRef();

    const handleClick = () =>{
      inputRef.current.value && setUsername(inputRef.current.value);
    }
  return (
    
    <div className="home">
        <input placeholder="Enter your Name" 
         className="homeInput" 
         ref={inputRef}
         />
        <button className="startButton" onClick={handleClick}>Start</button>

    </div>
  
  )
}
