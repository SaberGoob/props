import React from 'react';
import Profile from './Profile';
import './FullName.css';

const FullName = (props) => {
    console.log(props);
 
    return (
        <div className='FullName' style ={{color:"black",textAlign:"center"}}>
    <h1 className='Name'>  {props.firstName} {props.lastName}</h1>
    <Profile> </Profile>
        </div>
      

    );
};

export default FullName;