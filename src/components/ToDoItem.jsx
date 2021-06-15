import React from "react";


function ToDoItem(props) {


    return (

        <div onClick={() => {
            props.onChecked(props.id); // this is function calling or passing 'id' to line 23 of the 'deleteItem' function in app compoment
        }}>

            <li>{props.text}</li>;

        </div>
    );
}

export default ToDoItem;