import React from 'react'
import { connect } from 'react-redux';
import {addTodo} from '../action.js';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.inputTodo = React.createRef();
  }
  render () {
    return (
      <form 
      onSubmit={this.onTodoSubmit.bind(this)}>
        <input 
          type="text" 
          placeholder='add todo here ...' 
          ref={this.inputTodo}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
  onTodoSubmit(e) {
    e.preventDefault();
    const text = this.inputTodo.current.value.trim();
    if (text) {
      this.props.addTodo(text);
    }
  }
}

export default connect(null, dispatch => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  }
})(AddTodo)