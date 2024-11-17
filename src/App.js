import './App.css';
import { useState } from "react";

import Tours from './Components/Tours.js';
import dataa from './dataa.js'
const App= () => {
  const [tours,setTours] =useState(dataa)
  // console.log(tours)
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
    
  }
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No more tours.</h2>
        <button className='btn-white' onClick={()=>setTours(dataa)}>Refresh</button>

      </div>
    );

  }
  

  return(
    <div className='App'> 
      
      <Tours tours={tours}   removeTour={removeTour}></Tours>

      
    </div>
  );
}

export default App;