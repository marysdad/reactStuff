import React, { useState } from "react";



function InputArea(props) {

    const [inputText, setInputText] = useState(""); // this state holds old and new input


    //this function holds new list items
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (


        <div className="form">

            <input
                onChange={handleChange}
                type="text"
                value={inputText} />

            <button onClick={() =>{
                props.onAdd(inputText);
                setInputText(""); // this is clears the textbox.
            }} >
                <span>Add</span>
            </button>

        </div>
    )
}


export default InputArea;