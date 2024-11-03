import React from 'react'
import Resume1 from '../pdf/Resume1.pdf'
import hero from './data/hero.json' 
import img from './3dComponents/Img3D'
import Img3D from './3dComponents/Img3D'
const Home = () => {
  return (
    <>
    {/* <Img3D/>   */}
    <div className="container home" id="home">
      <div className="left">
          <h1>Ankit Kumar <br/> Vishwakarma</h1>
          <a href={Resume1} download={"Resume.pdf"} className="btn btn-outline-warning">Download Resume</a>
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