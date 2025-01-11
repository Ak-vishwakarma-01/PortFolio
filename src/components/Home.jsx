import React from 'react'
import Resume1 from '../pdf/Resumed1.pdf'
import hero from './data/hero.json' 
import Img3D from './3dComponents/Img3D'
const Home = () => {
  return (
    <>
    {/* <Img3D/>   */}
    <div className="home" id="home">
      <div className="left">
          <h2>Ankit Kumar <br/> Vishwakarma</h2>
          <a href={Resume1} download={"Resume.pdf"} className="btn btn-outline-warning" style={{color:"black", backgroundColor:"skyblue"}}>Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Home