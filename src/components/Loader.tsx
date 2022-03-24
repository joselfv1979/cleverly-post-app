import React from 'react';
import spinner from "../assets/puff.svg";

function Loader() {
  return (
    <div className="app__loader">
      <img src={spinner} className="app__loader__img" alt="Loading..." />
    </div>
  )
}

export default Loader