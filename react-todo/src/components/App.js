import React from 'react';
import Footer from './Footer';
import AddTodo from '../container/AddTodo';
import VisiableTodoList from '../container/VisiableTodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisiableTodoList/>
        <Footer/>
      </div>
    )
  }
}

export default App;
