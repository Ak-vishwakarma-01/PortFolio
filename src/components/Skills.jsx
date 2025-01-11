    import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return (
    <>
    <div className="banner" id='skills'>
        <h1>Skills</h1>
        <div className="slider" style={{ "--quantity": 10}}>
        {skills.map(data=>{
            return(
                <>  
                    <div className="item" key={data.id} style={{ "--position": data.id }}>
                        <img src={`/assets/${data.imageSrc}`} alt="" />
                    <h3 style={{fontSize:"2vw"}}>{data.title}</h3>
                    </div>
                </>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Skills