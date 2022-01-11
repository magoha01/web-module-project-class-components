import React from 'react';
import Todo from './Todo.js'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {};
      }

render(){
    return (
      <div>
        {this.props.tasks.map (task => (
          <Todo handleToggleTask={this.props.handleToggleTask} key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

    
export default TodoList;