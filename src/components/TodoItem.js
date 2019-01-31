/* eslint-disable */
import React, { Component } from 'react'

export class TodoItem extends Component {

    getStyleTxt = () => {
        return {
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    getStyleBtn = () => {
        return {
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
    const {id, title, completed} = this.props.todo;
    return (
      <li className = "todo-container">
          <input className="todo-checkbox" type="checkbox" 
          onChange={this.props.checkComplete.bind(this, id, completed)}>
          </input>
          <a href="" style={this.getStyleTxt()}>
          {title}
          </a>
          <button onClick={this.props.delTodo.bind(this, id, completed)} className="todo-delete" style={{background:'#f44336', float: 'right'}}>x</button>                     

      </li>
    )
  }
}

export default TodoItem
