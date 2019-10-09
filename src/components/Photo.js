import React from 'react'
const Photo = (props) => (
  <div className="card card-body bg-light">
    <h4 className="text-center">{props.photo.title}</h4>
    {
      // <iframe
      //   className="img-fluid rounded"
      //   src={props.photo.url}
      //   alt={props.photo.title}
      // ></iframe>
    }
    <img
      className="img-fluid rounded"
      src={props.photo.url}
      alt={props.photo.title}
    />
    <p>{props.photo.explanation}</p>
  </div>
)
export default Photo
