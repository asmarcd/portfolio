import React from "react";
import myFace from "../utils/images/MyFace.jpg";


function Home() {
    return (
        <section className="container">
            <br />
            <div className="card text-center">
                <div className="card-header">
                    <h1>Hi, I'm Chris Asmar</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title">I build software for the modern online world</h5>
                    <img className="headshot" src={myFace} alt="Chris Asmar Headshot" />
                    <p className="card-text">I've been working in tech in a variety of roles for over 7 years. I started off in 2014 at an LA based startup called NationBuilder, teaching people who were running for office for the first time how to build up their digital presence and their campaign infrastructure. Like a lot of young companies, customer-facing reps are often in charge of a wide variety of projects, so I dipped my toes in the water with Customer Success, Sales, Support, Professional Services, Product, and even HR. That's where I got my first glimpse into coding, learning basic HTML, CSS, Liquid, and Ruby on Rails to help customers troubleshoot and improve their sites. I worked at NationBuilder for five years, eventually becoming a manager on the Customer Success team and taking on Sales Operations as well.</p>
                    <p>
                        In 2018, I moved to Seattle and started at a small company called Luum, running their Customer Success department. In 2019, I joined the Customer Success team at Outreach, a fast-growing SaaS company helping sales leaders build better workflows for their teams. After 7 years in Sales and Account Management, I decided it was time for a change, and enrolled in the UW Coding Bootcamp to develop a skillset where I can  be creative and build something myself that people will love.
          </p>
                    <p>
                        In another lifetime, before all that, I worked on international relations and local campaign politics. Once  we're done talking coding, ask me about the time I helped remove land mines in Palestine.
          </p>
                    <a href="/portfolio" className="btn btn-primary">Check out my work</a>
                </div>
                <div className="card-footer text-muted">
                    <a href = "https://www.linkedin.com/feed/">LinkedIn</a> <a href = "https://github.com/asmarcd">Github</a>
  </div>
            </div>
            <br />
        </section>

    )
}

export default Home;