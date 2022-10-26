//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (<div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>);
}

SimpleCounter.prototype = {
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitone: propTypes.number  
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(((counter/1000) % 10));
    const three = Math.floor((counter/100) % 10);
    const two = Math.floor((counter/10) % 10);
    const one = Math.floor((counter/1) % 10);
    console.log(four, three, two, one);
    counter++;
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.querySelector("#app"));
}, 1000);

//import your own components
// import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.querySelector("#app"));