import React, { Component } from "react";
import Project from "./../components/Project/Project";
import projects from "./../projects.json";

class Portfolio extends Component {
    state = {
        projects
    };

    render() {
        return (
            <main className="container">
                <div className="text-center">
                    <h1>My Portfolio</h1>
                    <hr />
                </div>
                <div className="card-columns">
                    {this.state.projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            date={project.date}
                            img={project.img}
                            description={project.description}
                            activelink={project.activelink}
                            githublink={project.githublink}
                        />))}
                </div>
            </main>
        )
    }
}

export default Portfolio;