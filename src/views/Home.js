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
      <div>
        <div class="cardhome">
          <div class="card-header">
            Header
          </div>
          <div class="card-body">
            
            <p class="card-text">
            
            </p>
          </div>
          <div class="card-footer text-muted">
            Footer
          </div>
        </div>
      

      </div>
    )  
  }
}