import React, { Component } from "react"

class Form extends Component{
	render () {
		return (
			<form>

				<select>
					<option value="selecione">Select</option>
					<option value="all">All</option>
				</select>

				<button>Filter</button>
			</form>
		)
	}
}

export default Form 