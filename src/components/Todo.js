import React from "react";

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};
      }
     handleClick = () => {
      props.handleToggleTask(props.task);
    };
  
    render() {
    return (
      <div onClick={handleClick} className={`item${props.task.completed ? 'completed' : ''}`}>
        <p>{props.task.name}</p>
      </div>
    );
  };

}
  export default Todo;