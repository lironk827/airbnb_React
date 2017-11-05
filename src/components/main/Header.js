import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
            <header className="headerBox">
                <div className="logoBox">
                    <Link to='/'><img src="../static/images/air.png" alt=""></img></Link>
                </div>
                <div className="menuBox">
                    <label htmlFor="">sign in</label>
                    <label htmlFor="">contact us</label>
                    <Link to='/aboutus'><label htmlFor="">about us</label></Link>
                    <Link to='/reservations'><label htmlFor="">Reservations</label></Link>
                </div>
            </header>
        )
    }
}