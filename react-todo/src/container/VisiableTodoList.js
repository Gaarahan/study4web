import { connect } from 'react-redux';
import {toggleTodo} from "../action";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = ({todos, visibilityFilter}) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
