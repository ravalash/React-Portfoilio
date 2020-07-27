import React from "react";
import Project from "../Project";
import projects from '../../projects.json'

import BGImg from "../../assets/leather_1.png";

function Portfolio() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "blanchedalmond",
        minHeight: "100vh",
        fontFamily: "'Libre Baskerville', serif",
      }}
    >
      {/* <!-- grid is 3 rows of 2 columns above medium breakpoint --> */}
      <div className="row">
        <div className="col-lg-9">
          {/* <!-- left margin at large breakpoint to align content --> */}
          <div
            className="card mt-3 ml-lg-5"
            style={{ backgroundImage: "url(" + BGImg + ")" }}
          >
            <div className="card-body">
              <h2 className="card-title display-4 text-muted">Portfolio</h2>
              <div
                className="container"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                
               
                  
                    <Project projects={projects}/>
               
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
