import React from 'react';
import "../css/index.css";
import Contact from '../components/Contact';

export default ()=>{
  return(
    <>
      <div className="container">
        <h1 className="heading">Send me a message</h1>
        <Contact />
      </div>
    </>
  )
}