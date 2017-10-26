import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider } from 'material-ui'

import ChainerHeader from '../navs/ChainerHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <ChainerHeader/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
