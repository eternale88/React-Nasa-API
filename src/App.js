//App.js
import React, { Component } from 'react'
import DateInput from './components/DateInput'
import Photo from './components/Photo.js'
import { API_KEY } from './keys.js'

class App extends Component {
  state = {
    date: '',
    photo: ''
  }
  changeDate = (e) => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    this.setState({ date: dateFromInput })
    console.log
  }

  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} />
        <Photo />
      </div>
    )
  }
}
export default App
