import React from "react";
import Project from "../Project";
import projects from '../../projects.json'

import BGImg from "../../assets/leather_1.png";
import pimg1 from "../../assets/workday.jpg";
import pimg2 from "../../assets/missmarymagic.jpg";
import pimg3 from "../../assets/triviagame.jpg";
import pimg4 from "../../assets/weatherdashboard.jpg";
import pimg5 from "../../assets/movieme.jpg";
import pimg6 from "../../assets/passwordgenerator.jpg";
import pimg7 from "../../assets/eatdaburger.jpg";
import pimg8 from "../../assets/globeplotter.jpg";

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
