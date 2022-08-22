import React, { Component } from 'react'
import Contact from './views/Contact'
import Home from './views/Home'
import Nav from './components/Nav'
import Todo from './views/Todo'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Shoha',
      age: 9000
    }
  }

  addToAge = () => {
    this.setState({age: this.state.age + 1})
  }
  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/todo' element={<Todo/>}/>
          </Routes>


        </div>
      </BrowserRouter>
    )
  }
}