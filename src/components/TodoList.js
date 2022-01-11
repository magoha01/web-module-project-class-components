import React from 'react';
import Todo from './Todo.js'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return (
      <div>
        {props.tasks.map(task => (
          <Todo handleToggleItem={props.handleToggleTask} key={task.id} task={task} />
        ))}
      </div>
    );
  };
export default TodoList;