import React, { Component } from "react"

import Tasks from "./components/Tasks"
import Form from "./components/Form"

class App extends Component {
  render() {
    return(
      <div>
        <Form />
        <Tasks />
      </div>
    )
  }
}

export default App 