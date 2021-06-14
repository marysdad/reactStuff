import React, {useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const[inputText, setInputText] = useState(""); // this state holds old and new input
  const[items, setItems] = useState([]); // this state holds old and new list items for rendering.

  //this function holds new list items
  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //this function add new list item to the list using the spread feature
  function addItem(){
    setItems(prevItems =>{
      return [...prevItems,inputText];
    });
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handleChange}
        type="text"
        value={inputText}  />
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item =>
           <ToDoItem text={item}/>
           ) } 
        </ul>
      </div>
    </div>
  );
}

export default App;
