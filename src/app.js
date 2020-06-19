import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';

import aboutMeContent from './components/content/about-me';
import AboutMeList from './components/AboutMe/AboutMeList';

import PortfolioList from './components/portfolio/PortfolioList';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Content from './components/portfolio/portfolio-content';


class App extends Component {

//     state = {
//         url: ''
//     }

// componentDidMount(){
//     const content = Content;
//     this.setState({
//         url: content[0].img
//     })
// }

    render() {
        const newData = aboutMeContent;
        const content = Content;

        // console.log(this.state.url);
        console.log(content);
        
        return (
            <div style={{ height: '100%' }}>
                <Header />
                <Jumbotron />
                <AboutMeList data={newData}/>
                <PortfolioList />
                <img src={ content[0].img } />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));