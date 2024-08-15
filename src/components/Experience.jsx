import React from 'react'
import experience from './data/experience.json'
const Experience = () => {
  return (
    <div className="contiainer ex">
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id}></div>
            </>
          )
        })
      }
    </div>
  )
}

export default Experience