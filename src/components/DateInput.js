import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
  </div>
)
export default DateInput
