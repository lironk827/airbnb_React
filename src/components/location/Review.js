import React, { Component } from 'react';
import Rating from '../shared/Rating'

export default class Review extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='review-wrapper'>
                <div className='review-header sb hbox'>
                    <div className='review-header-personal-info hbox'>
                        <img className='review-img' src='../../static/images/host1.jpg' />
                        <div className='vbox paddingLeft15'>
                            <p> {this.props.author} </p>
                            <p className='fz11 gray paddingUtD5'> {this.props.date} </p>
                        </div>
                    </div>
                    <div className='review-header-ratings'> 
                        <Rating rating={this.props.rating}/>
                    </div>
                </div>
                <div className='review-body paddingUtD15 gray'>
                    <h4>{this.props.caption}</h4>
                    {this.props.description}
                </div>
            </div>
        )
    }
}