import React from "react";
import projects from "./data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="container projects my-3">
        <h1 style={{textAlign:"center"}}>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => {
            return (
              <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
                <div
                  className="card bg-dark text-light"
                  style={{ width: "100%" ,border:"1px solid pink", boxshadow: '3px 3px 3px 0px rgb(236, 126, 241)'}}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      alt=""
                      className="card-img-top"
                      style={{
                        width: "200px",
                        height: "200px",
                        border:"2px solid pink",
                        borderRadius:"10px"
                      }}
                    />
                  </div>
                  <div className="card-body" style={{textAlign:"center"}}>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.source} className="btn btn-primary ">
                      Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
