import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render () {
    const {todos, onTodoClick} = this.props

    return (
      <ul>
        {todos.map((todo, i) => (<Todo key={i} {...todo} onClick={() => onTodoClick(i)} />))}
      </ul>
    )
  }
}
