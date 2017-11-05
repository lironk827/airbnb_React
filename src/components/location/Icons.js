import React, { Component } from 'react';
import Rating from '../shared/Rating'

export default class icons extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='icons-wrapper hbox lightgray'>
                <div className='vbox icon-box'>
                    <i className="fa fa-users fa-2x paddingDown5" aria-hidden="true"></i>
                    <p> lorem </p>
                </div>
                <div className='vbox icon-box'>
                    <i className="fa fa-bed fa-2x paddingDown5" aria-hidden="true"></i>
                    <p> lorem </p>
                </div>
                <div className='vbox icon-box'>
                    <span><i className="fa fa-cutlery fa-2x paddingDown5" aria-hidden="true"></i></span>
                    <p> lorem </p>
                </div>
                <div className='vbox icon-box'>
                    <i className="fa fa-wifi fa-2x paddingDown5" aria-hidden="true"></i>
                    <p> lorem </p>
                </div>
            </div>

        
    }

}