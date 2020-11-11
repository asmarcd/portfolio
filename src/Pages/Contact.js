import React from "react";

function Contact() {
    return (
        <main className="container">
            <div className="row">
                <aside className="col-md-8 box">
                    <header>
                        <h1>Contact Me</h1>
                    </header>
                    <hr />
                    <article>
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Your name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Your email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Your message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </article>
                </aside>
                <aside className="col-md-4">
                </aside>
            </div>
            <br />
        </main>
    )
}

export default Contact;