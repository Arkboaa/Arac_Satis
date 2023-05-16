import React, { Component } from 'react'
import "./App.css"
import Navbar from "./components/Navbar";
import Araba from './components/Araba';
class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <Navbar title = "Arac İlan"/>
        <hr/>
        <Araba/>
      </div>
    )
  }
}
export default App;