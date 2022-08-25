import React, { Component } from 'react'
import "../App.css"

export default class ToDoItem extends Component {

    handleClick = () => {
        const copy = { ...this.props.obj, complete: !this.props.obj.complete }
        this.props.markComplete(copy, this.props.index)
    }

    render() {
        return (
            <div className='todoitem'>{this.props.obj.text}
                <input className='checkbox' type='checkbox' checked={this.props.obj.complete} />
                <button className='complete' onClick={() => {this.handleClick()}}>Complete</button>
                <button className='x' onClick={()=>{this.props.removeFromList(this.props.index)}}>x</button>
            </div>


        )
    }
}
