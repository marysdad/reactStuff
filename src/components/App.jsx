import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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

  function deleteItem(id){ // the id is coming from the line 10 in the ToDoItem component
    setItems(prevItems =>{ // this is functional programming where functions are passed into other functions like props
      return prevItems.filter((item,index) => {
        return index !== id; // means loop and return all array elements removing only element with id passed.
      })
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
        <ul>{/* below is looping through array using .map  */}
          {items.map((item, index) => 
           <ToDoItem 
           key={index}
           id={index}
           text={item}
           onChecked={deleteItem}  
           />
           ) } 
        </ul>
      </div>

    </div>
  );
}

export default App;
