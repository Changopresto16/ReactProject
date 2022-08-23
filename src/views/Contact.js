import React, { Component } from 'react'
import '../App.css'

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {'test': 'value'}
    console.log('constructed the CONTACT component')
  }


  componentDidMount() {
    console.log('mounted the CONTACT component')

  }

  render() {
    console.log('rendered the CONTACT component')


    return (
      <h1>WELCOME TO THE CONTACT PAGE</h1>
    )
  }
}