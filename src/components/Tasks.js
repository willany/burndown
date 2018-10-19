import React, { Component } from "react"

import TaskCard from "./TaskCard"

const TEAM_ID = 766419
const ACCESS_TOKEN = "75cb16379f106ac9ea40f8da1fe52b63e53b9898"
				


class Tasks extends Component{

	constructor(props) {
		super(props)
		this.state = {
			tasks: {},
			isLoaded: false
		}
	}

	componentDidMount(){

		fetch(`https://api.clickup.com/api/v1/team/${TEAM_ID}/task?&include_closed=true`,  {headers: {'Authorization': ACCESS_TOKEN}})
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					tasks: json
				})
			})
	}

	// TO DO
	// To be refactored

	allTasksLenght = () => {
		return (this.state.tasks).tasks.length
	}

	allTasksOpenedLenght = () => {
		return (this.state.tasks).tasks.filter((task) => task.status.status !== 'Closed').length
	}

	allTasksClosedLenght = () => {
		return (this.state.tasks).tasks.filter((task) => task.status.status === 'Closed').length
	}

	render() {

		const { isLoaded } = this.state;
		
		// TO DO
		// To be refactored
		
		if(!isLoaded) {
			return <div>Loading...</div>
		}else{

			return (
			<div className="grid-container">
				<TaskCard length={this.allTasksLenght()} title={"All Tasks"} />
				<TaskCard length={this.allTasksOpenedLenght()} title={"Opened Tasks"} />
				<TaskCard length={this.allTasksClosedLenght()} title={"Closed Tasks"} />
			</div>
			)
		}
	}
}

export default Tasks