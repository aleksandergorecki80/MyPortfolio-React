import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/header/Header';
import ProjectsPage from '../components/ProjectsPage';


const AppRouter = () => (
    <BrowserRouter>
        <div style={{ height:"1500px", background: 'red'}}>
            <Switch style={{ marginTop: "60px" }}>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;