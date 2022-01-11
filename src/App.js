import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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

        handleClearTask = ()=> {
      
          this.setState({
            ...this.state,
            tasks: this.state.tasks.filter(task => {
              return !task.completed;
            })
          });
        }
        
        handleToggleTask = (selectedTask) => {
      
          this.setState({
            ...this.state,
            tasks: this.state.tasks.map(task => {
              if(task.id === selectedTask.id) {
                return({
                  ...task,
                  completed: !task.completed
                })
              } else {
                return task;
              }
              
            })
          });
        }
      

  render() 
    { 
    return (
        <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTask={this.handleAddTask} handleClearTask={this.handleClearTask}/>
        </div>

        <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks}/>
        </div>
      );
    }
  }


export default App;
