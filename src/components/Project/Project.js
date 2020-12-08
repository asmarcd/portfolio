import React from "react";
import "./style.css";

function Project(props) {
    return (
            <div className="card">
                <div className="card-body">
                    <img src={props.img}/>
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href={props.activelink} className= "card-link">See it in action</a>
                    <a href={props.githublink} className="card-link">Github Repo</a>
                </div>
            </div>
    );
};

export default Project;