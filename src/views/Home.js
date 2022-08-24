import React, { Component } from 'react'
import '../App.css'

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 'test': 'value' }
    console.log('constructed the HOME component')
  }


  componentDidMount() {
    console.log('mounted the HOME component')

  }

  render() {
    console.log('rendered the HOME component')


    return (
      <h1>WELCOME TO THE HOME PAGE</h1>
    )
  }
}