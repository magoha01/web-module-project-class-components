import React from "react";

const Todo = props => {
    const handleClick = () => {
      //props.handleToggleTask(props.task);
    }
  
    return (
      <div onClick={handleClick} className={`item${props.task.purchased ? ' purchased' : ''}`}>
        <p>{props.item.name}</p>
      </div>
    );
  };
  
  export default Todo;