import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';

import aboutMeContent from './components/content/about-me';
import AboutMeList from './components/AboutMe/AboutMeList';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends Component {
    render() {
        const newData = aboutMeContent;
        
        return (
            <div style={{ height: '100%' }}>
                <Header />
                <Jumbotron />
                <AboutMeList data={newData}/>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));