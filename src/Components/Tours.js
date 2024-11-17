import React from 'react'
import Card from './Card.js';
function Tours({tours , removeTour}){
    console.log(tours);
    return(
        <div className='container' >
            
        <div>
            
            <h2 className='title'>Plan With Love</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour)=>{
                    return <Card {...tour}  removeTour={removeTour}></Card>
                })
            }  
        </div>
    </div>
    );

}
export default Tours;




// import React from 'react'
// import Card from './Card';
// const Tours = (props,tours) => {

//     function removeHandler(id) {
//         console.log(id);
//         props.removeTours(id);
//     }

//     return (
//         <div className='container'>
//             <div>
//                 <h2 className='title'>Plan with Love</h2>
//             </div>
//             <div className='cards'>
//                 {
//                     props.tours.map((tour) => {
//                         return <Card {...tour} key={tour.id} removeTour={removeHandler} />;
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Tours;