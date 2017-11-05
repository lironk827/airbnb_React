import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkInDate: moment(),
            checkOutDate: moment(),
            basePrice:this.props.price,
            calculatedPrice:0
        }
        this.handleCheckInChange = this.handleCheckInChange.bind(this)
        this.handleCheckOutChange = this.handleCheckOutChange.bind(this)
        this.priceUpdate = this.priceUpdate.bind(this)
    }
   
    componentWillMount(){
        this.setState({
            calculatedPrice:this.state.basePrice
        })
    }

    priceUpdate() {
        this.setState({
            calculatedPrice: this.state.basePrice * parseInt(this.guests.value)
        })
    }

    handleCheckInChange(date) {
        this.setState({
            checkInDate: date
        });
    }
    handleCheckOutChange(date) {
        this.setState({
            checkOutDate: date
        });
    }

    render() {
        return (
            <div>
                <div className='booking-price-wrapper'>
                    <div className='booking-price-inner-wrapper'>
                        <span className='fa fa-usd fa-2x' aria-hidden='true' />
                        <span className='fz20'>{this.state.calculatedPrice}</span>
                        <span> per night</span>
                    </div>
                </div>
                <div className='booking-wrapper vbox paddingUtD15 aic'>
                    <div className='booking-date-wrapper hbox '>
                        <div className='booking-checkIn-wrapper vbox'>
                            <label htmlFor="">Check In</label>
                            <DatePicker className='checkIn datePicker-component'
                                placeholderText={'DD/MM/YYYY'}
                                selected={this.state.checkInDate}
                                onChange={this.handleCheckInChange} />
                        </div>
                        <div className='booking-checkOut-wrapper vbox'>
                            <label htmlFor="">Check Out</label>
                            <DatePicker className='checkOut datePicker-component'
                                placeholderText={'DD/MM/YYYY'}
                                selected={this.state.checkOutDate}
                                onChange={this.handleCheckOutChange} />
                        </div>
                    </div>

                    <div className='booking-guests-wrapper vbox paddingUtD15'>
                        <label> Guests </label>
                        <select onChange={this.priceUpdate} ref={(element) => this.guests = element} >
                            <option value="1">1 guests</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                        </select>
                    </div>

                    <button className='booking-btn paddingUtD15'>  Book </button>
                    <label className='fz12 paddingUtD10 lightgray'>You won’t be charged yet</label>
                </div>
            </div>

        )
    }
}