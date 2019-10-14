//App.js
import React, { Component } from 'react'
import DateInput from './components/DateInput'
import Photo from './components/Photo.js'
import { API_KEY } from './keys.js'

class App extends Component {
  state = {
    date: new Date(),
    photo: ''
  }
  randomDate = (start, end) => {
    // return random date between start of Nasa POD and current Date
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  handleClick = (date) => {
    // generates random date and passes it into our
    // changeDate function which also updates state and
    // fetches a photo again
    let ranDate = this.randomDate(new Date(1995, 0o6 - 1, 16), new Date())
    this.changeDate(ranDate)
  }
  formatDate = (date) => {
    // converts date to yyyy-mm-dd
    return date.toISOString().split('T')[0]
  }
  changeDate = (date) => {
    this.setState({ date: date })
    this.getPhotoByDate(this.formatDate(date))
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
          <h2 className="text-center">NASA's Astronomy Picture of the Day</h2>
          <DateInput
            date={this.state.date}
            changeDate={this.changeDate}
            handleClick={this.handleClick}
          />
          <Photo photo={this.state.photo} />
        </div>
      </div>
    )
  }
}
export default App
