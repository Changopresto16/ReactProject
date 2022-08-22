import React, { Component } from 'react';
import '../App.css';
import ToDoItem from '../components/ToDoItem';

export default class Todo extends Component {
	constructor() {
		super();
		this.state = {
			todoItems: [],
		}
	};

	addToDoItem = (e) => {
		e.preventDefault();
		const thingToDo = e.target.thing.value
		const obj = {
			'text': thingToDo,
			complete: false
		}
		this.setState({todoItems: this.state.todoItems.concat([obj])})
	};

	removeFromList = (index) => {
		const newList = [...this.state.todoItems]
		newList.splice(index, 1)
		this.setState({todoItems: newList})
	};

	markComplete = (newObj, index) => {
		const newList = this.state.todoItems.slice()
		newList.splice(index, 1, newObj)

		this.setState({todoItems: newList})
	};

	showList = () => {
		return this.state.todoItems.map((t, i) => <ToDoItem key = {i} obj={t} index={i} markComplete={this.markComplete} removeFromList={this.removeFromList}></ToDoItem>)
	};

	render() {
		return (
			<div>
				<form
					onSubmit={(e) => {
						this.addToDoItem(e)
					}}
				>
					<input name='thing' />
					<button>Add</button>
				</form>
					<div className="cardlist">
					{this.showList()}
					</div>

			</div>
		);
	}
}
