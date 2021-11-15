import AddTodo from "Components/AddTodo";
import Todos from "Components/Todos";
import React from "react";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "estudar react" },
      { id: 2, content: "estudar nestjs" },
      { id: 3, content: "estudar Angular" },
    ],
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text"> Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
