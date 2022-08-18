import React, { Component } from 'react'
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: {
        todo: []
      }
    }
  };

  showCard =  () => {
    this.state.todos.todo.forEach(todoitem => {
        
      return (
        <div>
          <div className="card" style={{ width: "50rem", height: "50rem", backgroundColor: "whitesmoke" }}>
            <div className="card-body">
              <p className="card-text">{todoitem}</p>
              <input placeholder='Your To Do Here' />
              <button onClick={() => { this.setState({ done: true }) }}>Done</button>
              <a href="/Todos" className="btn btn-primary">Clear To Do</a>
            </div>
          </div>
        </div>
      )
    });
  }
  getInput = (e) => {
    e.preventDefault()
    const userInput = e.target.userinput.value;
    console.log(userInput)
    this.setState({ todos: {todo:[...this.state.todos.todo, userInput]} })
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.getInput}>
          <input name='userinput' placeholder='Your To Do Here' />
          <button className="btn btn-primary" type='submit'>Add to list</button>
          <a href="/ToDoList" className="btn btn-primary">Clear List</a>
        </form>
        <div>
          {this.showCard()}
        </div>
      </div>
    )
  };
};