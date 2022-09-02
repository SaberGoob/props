import React from 'react'
import './Bio.css';

 const Bio = (props) => {
    console.log(props);
 
    return (
            <div className='Bio'>
            <span >Age:</span> {props.Age} <br/>
            <span >Gender:</span>{props.Gender}<br/>
            <span >Interests:</span> {props.Interests}<br/>
            </div>
    );
};
export default Bio;
