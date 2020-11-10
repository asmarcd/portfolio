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
                <h1 className="title">Portfolio</h1>
                {this.state.projects.map(project => (
                    <Project
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        date={project.date}
                        image={project.image}
                        alt={project.alt}
                        description={project.description}
                        activelink={project.activelink}
                        githublink={project.githublink}
                    />))}
            </main>
        )
    }
}

export default Portfolio;