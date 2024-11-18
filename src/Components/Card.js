import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }){
    const[readmore,setReadmore]=useState(false);
    let description =readmore?info:`${info.substring(0,200)}....`;
    

    
    function readmoreHandler(){
        setReadmore(!readmore);
    }
   
    return(
    <div className="card flex justify-center items-center">
       

        <img src={image} alt="" className="image "></img>
        <div className="tour-info">
            <div className="tour-detail">
            <h4 className="tour-price font-bold">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>{readmore ? `Show less` : `Show more`}</span>

            </div>
        </div>
        <button className="btn-red text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>removeTour(id)} >Not Intrested</button>
    </div>

    );
}
export default Card;
