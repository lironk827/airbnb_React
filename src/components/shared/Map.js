import React, { Component } from 'react';

export default class Map extends Component {
    constructor() {
        super()
        this.map = ''
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.$map, {
            center: { lat: this.props.cords.lat, lng: this.props.cords.lng },
            zoom: 15
        })

        var marker = new google.maps.Marker({
            position: { lat: this.props.cords.lat, lng: this.props.cords.lng },
            map: this.map,
        });
    }
  
    componentWillReceiveProps(nextProps) {
        debugger
        this.lat = nextProps.cords.lat
        this.lng = nextProps.cords.lng
        this.map.setCenter({ lat, lng });
        this.map.setZoom(15);
    }

    render() {
        return (
            <div className='map-wrapper'>
                <h2 className='paddingUtD5'> The neighborhood</h2>
                <p className='paddingUtD5'> Location · Anna’s home is located in Ostuni, Brindisi, Italy. It’s 38 miles from Salento Airport.</p>
                <div className="map" ref={(e) => this.$map = e}>
                </div>
            </div>
        )
    }
}