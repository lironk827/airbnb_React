import React, { Component } from 'react';

export default function Jumbotron({image}) {
    return (<div className='location-details-img-container'
                style={{backgroundImage:'url('+image+')'}}>
            </div>)
}


