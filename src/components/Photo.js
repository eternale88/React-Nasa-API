import React from 'react'
const Photo = (props) => (
  <div className="card card-body bg-light">
    <h3>{props.photo.title}</h3>
    <img
      className="img-fluid rounded"
      src={props.photo.url}
      alt={props.photo.title}
    />
    <p>{props.photo.explanation}</p>
  </div>
)
export default Photo
