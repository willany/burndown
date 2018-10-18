import React, { Component } from "react"

const TEAM_ID = 766419
const ACCESS_TOKEN = "75cb16379f106ac9ea40f8da1fe52b63e53b989"


class Tasks extends Component{

	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			isLoaded: false
		}
	}

	componentDidMount(){

		fetch(`https://api.clickup.com/api/v1/team/${TEAM_ID}/task`,  {headers: {'Authorization': ACCESS_TOKEN}})
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					tasks: json
				})
			})
	}

	// getTasks = async () => {

	// 	const api_call = await fetch(`https://api.clickup.com/api/v1/team/${TEAM_ID}/task`, 
	// 		{ 
	// 		   method: 'GET', 
	// 		   headers: new Headers({
	// 		     'Authorization': ACCESS_TOKEN
	// 		})
	// 	 })

	// 	const data = await api_call.json()
	// 	console.log(data)
	// }

	render() {

		if(this.state.isLoaded) {
			return <div>Loading...</div>
		}else{

			return (
			<div>
				<h1>Tasks</h1>
				<ul>
					{this.state.tasks.map(task => (
						<li key={task.id}>
							{task.title}
						</li>
					))}
				</ul>
			</div>
			)
		}
	}
}

export default Tasks