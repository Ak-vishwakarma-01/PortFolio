import React from "react";

const Navebar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left" style={{fontWeight:"bold", fontSize:"1.6rem"}}>Portfolio</div>
        <div className="right">
          <a href="" className="nav_items">Home</a>
          <a href="" className="nav_items">Experience</a>
          <a href="" className="nav_items">Skills</a>
          <a href="" className="nav_items">Project</a>
          <a href="" className="nav_items">Contact</a>
          <button><i class="ri-menu-3-fill"></i></button>
        </div>
      </div>
    </>
  );
};

export default Navebar;
