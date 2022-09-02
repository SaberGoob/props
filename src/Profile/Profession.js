import React from 'react'
import './Profession.css'

const Profession = (props) => {
  return (
    <div className='Profession'>
        <h5 ><b>Profession</b></h5>
    <p >I am currently a student at GO My Code Academy,Electronics Engineer is looking for a new opportunity as a software Developper
    ,C/C++ development engineer or embedded engineer.
    I have some experience in development in C / C++,
    embedded (Raspberry Pi 3 B+, Arduino, STM 32f407 VGTX) and Python (image processing domain).
Motivated, curious, ambitious, always looking to improve my skills.</p>
    <p ><b>SKIILS</b> <br/> {props.Skill} <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
    </div>
  )
}

export default Profession