import React, { Component } from 'react';
import Jumbotron from './Jumbotron'
import LocationNav from './LocationNav'
import Header from './Header'
import Icon from './Icons'
import Reviews from './Reviews'
import Map from '../shared/Map'
import Wishlist from './Wishlist'
import Booking from './Booking'

export default class Location extends Component {
    constructor(props) {
        super(props)
        this.cityId = props.match.params.id
        this.state = { location: {}}
        this.getAverageRating = this.getAverageRating.bind(this)
    }

    componentWillMount() {
        fetch('/static/data/data.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                var location = this.getLocationById(data, this.cityId)
                return location
            }).then(location => {
                this.setState({
                    location: location[0]
                });
            })
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }

    getLocationById(data, id) {
        let location = data.filter((item, index) => {
            return (item.city.id === parseInt(id))
        })
        return location
    }

    getAverageRating(reviewsData) {
        let sum = reviewsData.reduce((acc, val) =>
            acc += parseFloat(val.rating)
            , 0)
        return sum / reviewsData.length
    }

    render() {
        if (this.state.location.id === undefined) {
            return (<div></div>)
        }
        let location = this.state.location
        let averageRating = this.getAverageRating(location.reviews)
        let reviews = location.reviews.map((item)=>{
             item.key = item.id
             return item
        })
        let reviewsObj = {reviews}
        return (
            <div>
                <Jumbotron image={location.image}/>
                <div className='location-wrapper'>
                    <div className='location-wrapper-leftSide'>
                        <LocationNav />
                        <Header city={location.city.name}
                            country={location.country.name}
                            averageRating = {averageRating}
                            reviewsCount={location.reviews.length}/>
                        <Icon />
                        <Reviews reviews={reviewsObj}
                                 averageRating = {averageRating}/>
                        <Map cords={location.coordinates}/>
                    </div>
                    <div className='location-wrapper-rightSide'>
                        <div className='vbox'>
                            <Booking price={location.basePrice}/>
                            <Wishlist />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}