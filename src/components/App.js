import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Header from './main/Header'
import Location from './location/Location'
import AboutUs from './AboutUs'
import Home from './home/Home'
import Reservation from './reservations/Reservation'

export default function App() {
    
    return (
        <div className="app">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route exact path="/details/:id" component={Location}/>
            <Route exact path="/aboutus" component={AboutUs}/>
            <Route exact path="/reservations" component={Reservation}/>
        </div>
    )
}