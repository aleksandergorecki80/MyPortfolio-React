import React, { Component } from 'react';
import AboutMe from './AboutMe';

class AboutMeList extends Component {
    render() {
        const dataReturn = this.props.data.map((obj, key)=>{
            return (
                <AboutMe 
                    key={key}
                    title={obj.title}
                    bodyTable={obj.body}
                />
            )
        })
        return (
            <section className="container about-me">
                    <h2>ABOUT ME</h2>
                    <hr className="hr--separator"/>
                {dataReturn}
            </section>
        );
    }
}



export default AboutMeList;