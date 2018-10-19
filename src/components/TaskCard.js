import React, { Component } from "react"

class TaskCard extends Component{

	render() {
		return (
			<div className="card">

			  	<div className="icon-task">
			  		<img src={require('../assets/icon-task.png')} alt="icon-task" title="ícone task" />
			  	</div>

			  	<div className="description-task">
			  		<span className="card-title">{this.props.title}</span>
			  		<span className="card-length">{this.props.length}</span>
			  	</div>
			  	
			</div>
		    )
	}

}

export default TaskCard





