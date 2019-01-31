import React, { Component } from 'react';
import Todos from './components/Todos';
import InfoPanel from './components/InfoPanel'
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'Make some work for test',
        completed: false
      },
      {
        id: 2,
        title: 'Meeting with anyone',
        completed: false
      },
      {
        id: 3,
        title: 'Buy some specific thing',
        completed: false
      }
    ],
    info: {
      itemCount: 3,
      uncheckedCount: 3
    },
    modalIsOpen: false
  }
  
  //Toggle to completed to true or false
  checkComplete = (id, completed) => {

    var unchecked = completed ? this.state.info.uncheckedCount+1 : this.state.info.uncheckedCount-1 ;
    var items  = this.state.info.itemCount;
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = ! todo.completed;
        }
        return todo;
      }),
      info:{
        itemCount: items, 
        uncheckedCount: unchecked
      }
    })
  }

  //Delete Todos
  delTodo = (id, completed) => {    
    var unchecked = completed ? this.state.info.uncheckedCount : this.state.info.uncheckedCount-1;
    var items = this.state.info.itemCount-1;
    this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)],
      info:{
        itemCount: items,
        uncheckedCount: unchecked
      }
    });
  }


  //Add Todos
  addTodo = (input) => {    
    var unchecked =this.state.info.uncheckedCount+1;
    var items = this.state.info.itemCount+1;
    var tod = {
      id: items,
      title: input,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, tod],
      info:{
        itemCount: items,
        uncheckedCount: unchecked
      }
    });
  }

  render() {
    return (      
      <div className="App container center">
      <h1 className="center title">Ineffable To-do</h1>
      <InfoPanel info = {this.state.info}/>
      <AddTodo addTodo={this.addTodo} className="center"/>
        <ul className="todo-list">
          <Todos todos={this.state.todos} checkComplete = {this.checkComplete}
          delTodo={this.delTodo}/>
        </ul>        
      </div>
    );
  }
}

export default App;