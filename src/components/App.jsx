import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const[items, setItems] = useState([]); // this state holds old and new list items for rendering.

 

  //this function add new list item to the list using the spread feature
  function addItem(inputText){
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

      <InputArea
        onAdd={addItem}
      />

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
