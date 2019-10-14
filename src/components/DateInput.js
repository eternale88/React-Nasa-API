import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const buttonPosition = {
  display: 'block',
  marginTop: '1.5rem',
  marginBottom: '1.5rem'
}
const buttonStyle = {
  backgroundColor: 'blue'
}
const DateInput = (props) => (
  <div className="text-center">
    <p>
      <em>Pick a Date</em>
    </p>
    <DatePicker
      className="form-control"
      selected={props.date}
      onChange={props.changeDate}
    />
    <div style={buttonPosition}>
      <button
        onClick={props.handleClick}
        style={buttonStyle}
        className="btn btn-default"
      >
        Random Photo
      </button>
    </div>
  </div>
)
export default DateInput
