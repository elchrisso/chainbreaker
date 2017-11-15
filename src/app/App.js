import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider } from 'material-ui'

import ChainerHeader from '../navs/ChainerHeader'
import ChainsList from '../chains/ChainsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <ChainerHeader/>
          <ChainsList/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
