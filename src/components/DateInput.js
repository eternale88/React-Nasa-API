import React from 'react'
const DateInput = (props) => (
  <form className="text-center" onSubmit={props.changeDate}>
    Enter a date (YYYY-MM-DD):
    <input className="form-control" />
    <input className="btn btn-primary" type="submit" />
  </form>
)
export default DateInput
