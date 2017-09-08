import React, { Component } from 'react';
import AddTodo from './Components/AddTodo';
import Placeholder from './Components/Placeholder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }

    this.renderList = this.renderList.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  renderList() {
    if (!this.state.list.length > 0) {
      return <Placeholder />;
    }

    return (
      <ul className="App-list">
        {this.state.list.map(todo =>
          <li key={todo.id}>
            {todo.label}
          </li>
        )}
      </ul>
    );
  };

  addTodo(todo) {
    this.setState(prevState => ({
      list: prevState.list.concat(todo),
    }));
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <section className="App-content">
          <AddTodo saveTodo={this.addTodo} />
          {this.renderList()}
        </section>
      </main>
    );
  }
}

export default App;
