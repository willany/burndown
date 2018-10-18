import React, { Component } from "react"

import Tasks from "./components/Tasks"
import Form from "./components/Form"

class App extends Component {
  render() {
    return(
      <div>
        <h1>Oie</h1>
        <Form />
        <Tasks />
      </div>
    )
  }
}

export default App 