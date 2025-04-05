// import React, { use } from 'react';

import {useState } from "react";

const Country = ({country}) => {
    // const [name, flags]= use(country)
    const [visited, setVisited]= useState(false)
    const handleVisited = ()=>{
      // console.log('click')
      // setVisited(true)
      if(visited === true){
        setVisited(false)
      }
      else{
        setVisited(true)
      }
    }
    return (
        <div className= {`mt-10`}>
            {/* <h3>Name: {country.name.common} </h3>
            <img src= {country.flags.png} alt="" /> */}
            <div className= {`card w-96 shadow-sm ${visited && 'bg-amber-100 text-black'}`} >
  <figure>
    <img className="w-full h-[250px]"
      src= {country.flags.png}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{country.name.common}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button onClick={handleVisited} className="btn btn-primary">{visited ? 'visited': 'not visited'}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Country;