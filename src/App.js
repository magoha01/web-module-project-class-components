import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

        constructor() {
          super();
          this.state = {
            tasks: tasks
          };
        }

        handleAddTask = (taskName)=> {
          //1. Capture our click
          //2. change our state
          //3. retain previous state
          //4. change groceries: add to groceries an new groceries
        
          const newTask = {
            name:taskName,
            id: Date.now(),
            completed: false
          };
        
          this.setState({
            ...this.state,
            tasks: [...this.state.tasks, newTask]
          });
        }
        

  render() 
    { 
    return (
        <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTask={this.handleAddTask}/>
        </div>

        <TodoList tasks={this.state.tasks}/>
        </div>
      );
    }
  }


export default App;
