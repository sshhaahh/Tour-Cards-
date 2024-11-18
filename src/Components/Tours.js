import React from 'react'
import Card from './Card.js';
function Tours({tours , removeTour}){
    return(
        <div className='container' >
            
        <div>
            
            <h2 className='title'>Plan With Love</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour)=>{
                    return <Card {...tour} key={tour.id}  removeTour={removeTour}></Card>
                })
            }  
        </div>
    </div>
    );

}
export default Tours;

