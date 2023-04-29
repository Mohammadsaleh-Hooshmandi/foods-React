import React from "react";
import Star from "./Star";
import "./Card.css";
import customers from "../customers";

function Card(props) {
    return (
        <div className="card">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">{props.text}</p>
            <div className="customer-rating">
                <Star status={true}/>
                <Star status={true}/>
                <Star status={true}/>
                <Star status={true}/>
                <Star status={false}/>
            </div>
            <img src={props.image} className="customer-img"></img>
            <h4 className="customer-name">{props.name}</h4>
        </div>
    );
    
}

export default Card;