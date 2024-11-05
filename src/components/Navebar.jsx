import React, { useState } from "react";

const Navebar = () => {
  const [mobile,setMobile] = useState("false");
  function changclass(){
    setMobile(mobile==="true"?"false":"true")
    console.log(mobile);
  }
  return (
    <>
      <div className={`nav_bar ${mobile}`}>
        <div className={`left le${mobile}`} style={{fontWeight:"bold", fontSize:"1.6rem", marginLeft:"10px"}}>Portfolio</div>
        <div className={`right ${mobile}`}>
          <a onClick={changclass} href="#home" className="nav_items">Home</a>
          {/* <a onClick={changclass} href="#experience" className="nav_items">Experience</a> */}
          <a onClick={changclass} href="#skills" className="nav_items">Skills</a>
          <a onClick={changclass} href="#projects" className="nav_items">Project</a>
          <a onClick={changclass} href="#contact" className="nav_items">Contact</a>
          <button onClick={changclass}><i class="ri-menu-3-fill"></i></button>
        </div>
      </div>
    </>
  );
};

export default Navebar;
