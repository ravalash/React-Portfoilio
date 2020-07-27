import React from "react";

function Project(props) {
    return (
  

<div className="row mt-3">
      {props.projects.map(item => (
       
<div className="col-md-6 pb-4">
<div
  className="card text-center"
  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "ivory",
    color: "black",
  }}
>
  <div className="card-header">
    <a href={item.repo} target="_blank" rel="noopener noreferrer">
      <h5 style={{fontWeight: 'bold', color: 'black'}}>{item.title}</h5>
    </a>
  </div>
  <a href={item.page} target="_blank" rel="noopener noreferrer">
    <img
      className="card-img-top"
      src={item.bg}
      alt="Card cap"
      style={{border: 'blanchedalmond solid 2px'}}
    />
  </a>

  <div className="card-body d-flex align-items-end">
    <p className="card-text">
      {item.description}
    </p>
  </div>
</div>
</div>

      ))}
</div>

      )
      
    
}

export default Project;
