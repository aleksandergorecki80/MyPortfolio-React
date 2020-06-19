import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        console.log(this.props)
        const bodyTable = this.props.bodyTable.map((body, key) => {
            return (
                <p key={key}>{body}</p>
            )
        });
        return (
            <section className="container">
                <div className="about-me">
                    <h5>{this.props.title}</h5>
                    <hr />
                    {bodyTable}
                </div>
            </section>
        )
    }

}


export default AboutMe;