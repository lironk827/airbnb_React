import React, { Component } from 'react';

export default class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {count:0}
    }
    
    render() {
        return (
            <div className='wishlist-wrapper vbox paddingUtD15'>
                <label onClick={this.func} className='wishlist-btn gray'>
                    <span className="fa fa-heart-o" aria-hidden="true"/> Save to your wishlist</label>
                <p className='lightgray paddingUtD15'>3295 travelers saved this place</p>
                <div className='wishlist-icons-wrapper hbox gray sb'>
                    <span className="fa fa-facebook" aria-hidden="true"></span>
                    <span className="fa fa-twitter" aria-hidden="true"></span>
                    <span className="fa fa-envelope" aria-hidden="true"></span>
                    <span className="fa fa-fa fa-ellipsis-h" aria-hidden="true"></span>

                </div>
            </div>)
    }
}