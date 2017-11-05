import React, { Component } from 'react';
import Review from './Review'
import Rating from '../shared/Rating'

export default class Reviews extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let reviews = this.props.reviews.reviews
        let arr = []
        for (var i = 0; i < reviews.length; i++) {
            arr.push(<Review description={reviews[i].description}
                             rating={reviews[i].rating}
                             author={reviews[i].author}
                             date={reviews[i].date} 
                             caption={reviews[i].caption}/>)
        }
        return (<div id='reviews' className=' reviews-wrapper' >
            <div className='hbox sb'>
                <h2 className='paddingRight15'> Total reviews: {reviews.length} </h2>
                <div className='vbox aie'>
                    <h3>Average rating </h3>
                    <h2><Rating rating={this.props.averageRating} /></h2>
                </div>
            </div>
            {arr}
        </div>)
    }

}