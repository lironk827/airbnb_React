import React, { Component } from 'react';
import Location from './Location'

export default class Locations extends Component {

    constructor(props) {
        super(props)
    }

    renderItem(item, index) {
        return <Location
            key={item.id}
            imgUrl={item.image}
            reviewData={item.reviews}
            cityId={item.city.id}
            city ={item.city.name} 
            country = {item.country.name}
            maxGuests={item.maxGuests}/>
    }

    render() {
         let list = this.props.list
        return (
            <div className='items-container'>
                {list.map(this.renderItem)}
            </div>
        )
    }
}