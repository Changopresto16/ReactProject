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
                <input type='checkbox' checked={this.props.obj.complete} />
                <button onClick={() => {this.handleClick()}}>Complete</button>
                <button onClick={()=>{this.props.removeFromList(this.props.index)}}>x</button>
            </div>


        )
    }
}
