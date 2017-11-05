import React, { Component } from 'react';
import Rating from '../shared/Rating'
import { Link } from 'react-router-dom'

export default class Location extends Component {
        constructor(props) {
                super(props)
                this.getAverageRating = this.getAverageRating.bind(this)
                this.averageRating = this.getAverageRating()
        }

        getAverageRating() {
                let reviews = this.props.reviewData
                let sum = reviews.reduce((acc, val) =>
                        acc += parseFloat(val.rating)
                        , 0)
                return sum / reviews.length
        }

        render() {
                let id = this.props.cityId
                let link = '/details/'+id
                return (
                        <div className='single-item'>
                                <Link to={link}> <img className='item-img' src={this.props.imgUrl} alt="" /> </Link>
                                <div className='city-country text-padding'>
                                        <i><b>{this.props.city + ','}</b></i>
                                        <span> {this.props.country}</span>
                                </div>
                                <p className='capacity'>max capacity {' ' + this.props.maxGuests}</p>
                                <div className='review-container text-padding'>
                                        <Rating rating={this.averageRating} />
                                        <span> {this.props.reviewData.length} reviews </span>
                                </div>
                        </div>
                )
        }
}
