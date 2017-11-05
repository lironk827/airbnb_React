import React, { Component } from 'react';
import Rating from '../shared/Rating'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='location-header-wrapper'>
                <div className='hbox'>
                    <div className='vbox location-header-leftSide'>
                        <h1 className='cap paddingUtD15'> Lorem ipsum dolor</h1>
                        <div className='hbox paddingUtD5'>
                            <span className='paddingRight10 '> {this.props.city},{this.props.country} </span>
                            <div className='paddingRight10 '>
                                <Rating rating={this.props.averageRating}/>
                            </div>
                            <span className='paddingRight'>{this.props.reviewsCount} reviews </span>
                        </div>
                    </div>
                    <div className='location-header-rightSide'>
                        <img className='location-header-img' src='../../static/images/host1.jpg' />
                        <p> Anna </p>
                    </div>
                </div>
            </div>
        )
    }
}