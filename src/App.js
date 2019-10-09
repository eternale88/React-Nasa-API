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
    this.getPhotoByDate(dateFromInput)
  }
  getPhotoByDate = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((photoData) => {
        this.setState({ photo: photoData })
      })
  }
  // lifecycle method that render photo before app renders
  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ photo: json })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light">
          <h1>NASA's Astronomy Picture of the Day</h1>
          <DateInput changeDate={this.changeDate} />
          <Photo photo={this.state.photo} />
        </div>
      </div>
    )
  }
}
export default App
