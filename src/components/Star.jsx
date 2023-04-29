import React from "react";

function Star(props) { 
    return props.status ? <i className="fas fa-star"></i>
    :<i className="fas fa-star-half-alt"></i>;
    
}

export default Star;