import React, { Component } from 'react';
import {VAT} from '../consts/consts'

export default class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let vat = VAT*100
        return (
            <div className='reservation-info-wrapper'>
                <div className='paddingUtD10'>
                    <h4>reservation: {this.props.id}</h4>
                </div>
                <div className='paddingUtD10'>
                    <h4 className='vbox'>Date</h4>
                    <div className='vbox reservation-info-dates'>
                        <p> Check In: <span>{this.props.checkIn}</span></p> 
                        <p> Check Out: <span>{this.props.checkOut}</span></p>
                    </div>
                </div>
                <div className='paddingUtD10'>
                    <h4>guests: {this.props.guests}</h4>
                </div>
                <div className='paddingUtD10'>
                    <h4>price (per night): {this.props.price}</h4>
                    <h5> vat:{vat}% </h5>
                </div>
                <div>
                    <h3>total: {this.props.totalPrice}</h3>
                </div>
            </div>
        )
    }

}