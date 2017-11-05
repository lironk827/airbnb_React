import React, { Component } from 'react';
import Details from './Details'
import {VAT} from '../consts/consts'

export default class Reservation extends Component {
    constructor(props) {
        super(props)
        this.state = { reservation: {} }
    }

    componentWillMount() {
        fetch('/static/data/reservations.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                this.setState({
                    reservation: data[0]
                });
            }).catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }

    calcTotalPrice(price,guests,vat=0.1){
        return Math.round((price * guests) *(1+vat))
    }


    render() {
        if (this.state.reservation.id === undefined) {
            return <div></div>
        }
        let reservation = this.state.reservation
        let price = reservation.price
        let guests = reservation.guests
        return (
            <div>
                <h1 className='green tc'> Reservation # {reservation.id}</h1>
                <h2 className='green tc'> for Mr. John Doe </h2> 
                <div className='paddingUtD15 reservation-wrapper hbox'>
                    <div className='reservation-info'>
                        <Details id={reservation.id}
                                 checkIn= {reservation.date.checkIn}
                                 checkOut={reservation.date.checkOut}
                                 guests ={reservation.guests}
                                 price ={reservation.price}
                                 totalPrice = {this.calcTotalPrice(price,guests,VAT)}    />
                    </div>
                </div>
            </div>
        )
    }

}