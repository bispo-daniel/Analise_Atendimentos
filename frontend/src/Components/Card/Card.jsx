import React from "react";
import "./Card.css"

function Card (props) {
    return (
        <a className="card" href={props.href}>
            <h1>{props.statusValue}</h1>
            <p>{props.statusType}</p>
        </a>
    )
}

export default Card;