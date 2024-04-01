import { useState } from "react";
import style from "./Input.module.css"

const Input = (props) => {
  const [text, setText] = useState("")

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  const handleClick = (taskName) => {
    if(text !== "") {
      props.onAdd(taskName);
      setText("");
    }
  }

  return(
    <div className="add-task-input">
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange}
        className={style.inputTask}/>
      <button 
        className={style.buttonAddTask}
        onClick={() => handleClick(text)}>
        Add
      </button>
    </div>
  )
}

export default Input;