import React from "react";
import projects from "./data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="projects my-3" id="projects" style={{paddingTop:" 10vh"}}>
        <h1 style={{textAlign:"center"}}>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => {
            return (
              <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4 parent">
                <div
                  className="text-light card"
                  style={{ width: "100%" ,border:"1px solid pink", boxshadow: '3px 3px 3px 0px rgb(236, 126, 241)'}}
                >
                  <div className=" img d-flex justify-content-center align-content-center p-3" >
                    <img
                      src={`/assets/${data.imageSrc}`}
                      alt=""
                      className="card-img-top"
                      style={{
                        width: "160px",
                        height: "160px",
                        border:"2px solid pink",
                        borderRadius:"10px"
                      }}
                    />
                  </div>
                  <div className="card-body" style={{textAlign:"center"}}>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-content">{data.description}</p>
                    <a href={data.source} className="btn btn-primary see-more" target="_blank">
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
