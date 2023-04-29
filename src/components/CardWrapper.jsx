import React from "react";
import "./CardWrapper.css";
import Card from "./Card";
import customers from "../customers";
 

function CardWrapper (props) {
    return (
        <section className="section-2">
            <h1 className="section-heading">{props.heading}</h1>
            <div className="card-wrapper">
                {customers.map(customer => <Card
                key={customer.id}
                name={customer.name}
                image={customer.image}
                text={customer.text}/>)}
            </div>
        </section>
    );
}

export default CardWrapper;