import React, { Component } from 'react';

export default class LocationNav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='location-nav-wrapper'>
                <ul className='location-nav'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>)
    }
}