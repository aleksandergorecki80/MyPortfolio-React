import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/Header';

import Jumbotron from './components/jumbotron/Jumbotron';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Header />
                <Jumbotron />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));