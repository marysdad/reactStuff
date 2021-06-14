import React, {useState} from "react";


function ToDoItem(props){

    const [isDone, setIsDone] = useState(false); // state holds the boolean for click on or off

    function handleClick(){ // trigged by onClick in the div
        setIsDone(prevValue => {
            return !prevValue; // = return the opposite of the preValue using "!".
        });
    }

    return (
    
    <div onClick={handleClick}>
    
    <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>;

    </div>
    );
}

export default ToDoItem;