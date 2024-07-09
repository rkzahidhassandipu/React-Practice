import React from "react";


function Card(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    )
}


export default Card;